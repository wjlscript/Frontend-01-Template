import {createElement} from './libs';

class Carousel {
    constructor() {
        this.children = [];
    }

    appendChild(child) {
        this.children.push(child);
    }

    mount(parent) {
        this.render().mount(parent);
    }

    render() {
        // 禁用子元素的拖拽事件
        this.children.forEach(child => {
            child.addEventListener("dragstart", e => e.preventDefault());
        });

        let root = <div class="carousel">
            {this.children}
        </div>;

        let position = 0;
        let mousedown = false;

        let nextPic = () => {
            if (mousedown) {
                setTimeout(nextPic, 2000);
                return
            }
            let nextPosition = (position + 1) % this.children.length;

            let current = this.children[position];
            let next = this.children[nextPosition];

            // 把 next 移到右边位置，禁用动画
            next.style.transition = "none";
            next.style.transform = `translateX(${100 - 100 * nextPosition}%)`;

            setTimeout(() => {
                // 开启动画
                next.style.transition = "";

                current.style.transform = `translateX(${-100 - 100 * position}%)`;
                next.style.transform = `translateX(${-100 * nextPosition}%)`;

                position = nextPosition;
            }, 16);

            setTimeout(nextPic, 2000);
        }
        setTimeout(nextPic, 4000);

        root.addEventListener('mousedown', (e) => {
            let startX = e.clientX;
            let nextPosition = (position + 1) % this.children.length;
            let prevPosition = (position - 1 + this.children.length) % this.children.length;

            let current = this.children[position];
            let next = this.children[nextPosition];
            let prev = this.children[prevPosition];

            // 拖拽之前，把 prev 和 next 元素分别放置在当前元素的左边和右边位置，不需要动画
            prev.style.transition = "none";
            current.style.transition = "none";
            next.style.transition = "none";
            prev.style.transform = `translateX(${-100 - 100 * prevPosition}%)`;
            current.style.transform = `translateX(${-100 * position}%)`;
            next.style.transform = `translateX(${100 - 100 * nextPosition}%)`;


            let move = (evt) => {
                // 获取最新的元素
                current = this.children[position];
                next = this.children[nextPosition];
                prev = this.children[prevPosition];

                const offset = evt.clientX - startX;
                prev.style.transform = `translateX(calc(${-100 - 100 * prevPosition}% + ${offset}px))`;
                current.style.transform = `translateX(calc(${-100 * position}% + ${offset}px))`;
                next.style.transform = `translateX(calc(${100 - 100 * nextPosition}% + ${offset}px))`;

                if (offset / 500 >= 1) {
                    // 向右滑动超过1屏，更换 prev next current
                    nextPosition = position;
                    position = prevPosition;
                    prevPosition = (position - 1 + this.children.length) % this.children.length;

                    // 把 prev 的动画关掉
                    this.children[prevPosition].style.transition = "none";

                    // 更新 startX
                    startX += Math.floor(offset / 500) * 500;
                } else if (offset / 500 <= -1) {
                    // 向左滑动超过1屏，更换 prev next current
                    prevPosition = position;
                    position = nextPosition;
                    nextPosition = (position + 1) % this.children.length;

                    // 把 prev 的动画关掉
                    this.children[nextPosition].style.transition = "none";

                    // 更新 startX
                    // 这里需要注意 Math.floor(-1.5) == -2，所以对 offset 取反，最后 startX 减去偏移量
                    startX -= Math.floor(-offset / 500) * 500;
                }
            };
            let up = (evt) => {
                let offset = 0;
                if (evt.clientX - startX > 250) {
                    offset = 1;
                } else if (evt.clientX - startX < -250) {
                    offset = -1;
                }


                // 打开动画
                prev.style.transition = "";
                current.style.transition = "";
                next.style.transition = "";

                prev.style.transform = `translateX(${offset * 500 -500 -500 * (prevPosition)}px)`;
                current.style.transform = `translateX(${offset * 500 -500 * (position)}px)`;
                next.style.transform = `translateX(${offset * 500 +500 -500 * (nextPosition)}px)`;

                position = (position - offset + this.children.length) % this.children.length;

                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', up);

                mousedown = false;
            };
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
            mousedown = true;
        });


        return root;
    }
}


let component = <Carousel>
    <img src="https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg"/>
    <img src="https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg"/>
    <img src="https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg"/>
    <img src="https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"/>
</Carousel>


console.log("component: ", component);
component.mount(document.body);

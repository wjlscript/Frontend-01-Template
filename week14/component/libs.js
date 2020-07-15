import {getKebabCase} from "./utils";

export class Text {
    constructor(text) {
        this.root = document.createTextNode(text);
        this.text = text;
    }

    mount(parent) {
        parent.appendChild(this.root);
    }
}

export class Wrapper {
    constructor(tagName) {
        this.root = document.createElement(tagName);
        this.children = [];
    }

    // attribute
    setAttribute(name, value) {
        if (typeof value === "string") {
            this.root.setAttribute(name, value);
        } else if (name === 'style' && Array.isArray(value)) {
            // style 的数组语法
            let styles = [];
            value.forEach(item => {
                if (typeof item !== "object") {
                    styles.push(String(item));
                } else {
                    // 遍历对象
                    for (let k in item) {
                        styles.push(`${getKebabCase(k)}:${item[k]}`);
                    }
                }
            })
            this.root.setAttribute('style', styles.join(';'));
        } else if (name === 'style' && typeof value === "object") {
            // style 的对象语法
            let styles = [];
            for (let k in value) {
                styles.push(`${getKebabCase(k)}:${value[k]}`);
            }
            this.root.setAttribute(name, styles.join(';'));
        } else if (name === 'class' && Array.isArray(value)) {
            // class 的数组语法
            let cls = [];
            value.forEach(item => {
                if (typeof item !== "object") {
                    cls.push(String(item));
                } else {
                    // 遍历对象
                    for (let k in item) {
                        if (item[k]) {
                            cls.push(k);
                        }
                    }
                }
            })
            this.root.setAttribute('class', cls.join(' '));
        } else if (name === 'class' && typeof value === "object") {
            // class 的对象语法
            let cls = [];
            // 遍历对象
            for (let k in value) {
                if (value[k]) {
                    cls.push(k);
                }
            }
            this.root.setAttribute('class', cls.join(' '));
        }
    }

    get style() {
        return this.root.style;
    }

    // children
    appendChild(child) {
        this.children.push(child);
    }

    addEventListener() {
        this.root.addEventListener(...arguments);
    }

    mount(parent) {
        parent.appendChild(this.root);

        for (let child of this.children) {
            // 不能直接使用下面这样
            // this.root.appendChild(child)
            // 因为 child 有可能是一个 Wrapper，并不是真正的 DOM Node

            child.mount(this.root);
        }
    }
}

export function createElement(Cls, attributes, ...children) {
    let o;
    if (typeof Cls === "string") {
        o = new Wrapper(Cls);
    } else {
        o = new Cls();
    }

    // 处理 attributes
    for (let name in attributes) {
        o.setAttribute(name, attributes[name]);
    }

    // 处理 children
    function visit(children) {
        for (let child of children) {

            if (typeof child === "string") {
                // child 为字符串时，表示文本节点
                o.appendChild(new Text(child));
            } else if (Array.isArray(child)) {
                // child 为数组的处理
                visit(child);
            } else if (typeof child === "function") {
                // child 是函数的处理
                o.appendChild(child());
            } else {
                o.appendChild(child);
            }
        }
    }

    visit(children);

    return o;
}


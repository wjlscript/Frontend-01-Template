function createElement(Cls, attributes, ...children) {
    console.log('createElement:', arguments);
    let o = new Cls();

    return o;
}


class Fragment {

}

class Dropdown {

}

class Menu {
    static MenuItem() {

    }
}


// Using JSX to express UI components.
let dropdown = <Dropdown>
    A dropdown list
    <>
        <Menu.MenuItem>Do Something</Menu.MenuItem>
        <Menu.MenuItem>Do Something Fun!</Menu.MenuItem>
        <Menu.MenuItem>Do Something Else</Menu.MenuItem>
    </>
</Dropdown>;



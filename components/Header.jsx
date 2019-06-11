import { Component } from "react";
import Nav from "./Nav/Nav";

// 公用部分
class Header extends Component {
    static getInitialProps() {
    }

    render() {
        return (
            <div>
                <Nav/>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default Header;
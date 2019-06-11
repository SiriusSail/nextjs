import { Component } from "react";
import Header from "../components/Header";
import Index from "../components/index/Index";


// 首页
class index extends Component {
    render() {
        return (
            <main>
                <Header>
                    <Index />
                </Header>
            </main>
        );
    }
}

export default index;
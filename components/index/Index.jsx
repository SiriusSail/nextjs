import { Component } from "react";
import Mobile from "../mobile/Mobile";
// 首页
class Index extends Component {
    static getInitialProps() {
    }

    render() {
        return (
            <div className="index-class">
                <style jsx>{`
                    .index-class{
                        height:1200px;
                        overflow:hidden;
                    }
                    .text-class{
                        height:100%;
                        float:left;
                        display:block;
                        width:20%;
                    }
                    .text-left{
                        width:80%;
                    }
                `}</style>
                <div className="text-class text-left">1</div>
                <div className="text-class text-right">
                    <Mobile
                        btn={<button>打开模态框</button>}
                        text={<div style={{width: "200px", height:"100px", border: "1px solid #ccc", background: "#fff"}}>123123</div>}
                    />
                </div>
            </div>
        );
    }
}

export default Index;
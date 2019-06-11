import React, {Component} from "react";
import Cursor from "../Cursor";

// 模态框
class Mobile extends Component {
    static getInitialProps() {
    }

    constructor(props) {
        super(props);
        this.Div = React.createRef();
        this.state={
            toggle:false
        }
    }

    pupilsChange(e) {
        console.log("位置发生变化了")
    }

    // 打开关闭模态框
    open(){
        this.setState({toggle:true});
    }
    close(){
        this.setState({toggle:false});
    }

    render() {
        return (
            <div>
                <div onClick={this.open.bind(this)}>{this.props.btn}</div>
                {this.state.toggle && <div
                    style={{
                    position: "fixed",
                    left: "0",
                    top: "0",
                    display: "block",
                    width: "100%",
                    height: "100%"
                }}>
                    {/*背景*/}
                    <div
                        onClick={this.close.bind(this)}
                        style={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        background:"rgba(0, 0, 0, 0.4)"
                    }}/>
                    {/*内容*/}
                    <Cursor option={{x: "35%", y: "30%"}} id="pupils_left" pupilsChange={this.pupilsChange.bind(this)}>
                        <div ref={this.Div}>
                            {this.props.text}
                        </div>
                    </Cursor>
                </div>}
            </div>
        );
    }
}

export default Mobile;
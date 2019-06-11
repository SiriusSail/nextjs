import React, {Component} from 'react';

// 拖动组件，不适用移动端移动端事件处理不一样。
class Cursor extends React.Component {
  state = {
    x: "65%",
    y: "30%",
    x2: 0,
    y2: 0,
    excursion: false,
  };

  constructor(props) {
    super(props);
    this.t = this.props.t;
    this.state.id = this.props.id;
    this.parent = React.createRef();
    this.state.x = this.props.option.x;
    this.state.y = this.props.option.y;
  }

  componentDidMount() {
    if (this.props.children.ref.current) {
      this.setState({
        x2: this.props.children.ref.current.width / 2,
        y2: this.props.children.ref.current.height / 2,
      });
    }
  }

  // 拖动
  PressMove(data) {
    data.preventDefault();
    if(!this.state.excursion){return ;}
    let x = data.pageX - this.state.excursion.left;
    let y = data.pageY - this.state.excursion.top;
    if (x === this.state.x && y === this.state.y) {
      return;
    }
    // x = x < 0 ? 0 : x;
    // x = (x + this.state.x2) > this.parent.current.width ? this.parent.current.width : x;
    // y = y < 0 ? 0 : y;
    // y = (y + this.state.y2) > this.parent.current.height ? this.parent.current.height : y;
    this.setState({x, y});
    this.props.pupilsChange({
      [this.state.id]: {
        x: x + this.state.x2,
        y: y + this.state.y2
      }
    });
  }
// 拖动结束
  Out(e) {
    e.preventDefault();
    this.setState({
      excursion: false
    });
  }
  //拖动开始
  Tap(data) {
    data.preventDefault();
    var target = data.target;
    const x = data.pageX;
    const y = data.pageY;
    this.setState({
      excursion: {
        left: x - this.parent.current.offsetLeft,
        top: y - this.parent.current.offsetTop
      }
    });

  }

  render() {
    const me = this;
    return (
      <div className="pupils" ref={this.parent}
           style={{"position": "absolute", "left": this.state.x, "top": this.state.y}}
           onMouseDown={(e) => this.Tap(e)}
           onMouseMove={(e) => this.PressMove(e)}
           onMouseUp={(e) => this.Out(e)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Cursor;
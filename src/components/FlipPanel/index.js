import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.styl";

export default class FlipPannel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { show: false };

    setInterval(() => {
      this.setState({ show: !this.state.show });
    }, 2000);
  }
  render() {
    const { direction, children } = this.props;
    console.log(this.state.show);
    return (
      <div className="flip-panel">
        <CSSTransition
          classNames={direction}
          timeout={300}
          in={this.state.show}
        >
          <div className="flip-card">{children}</div>
        </CSSTransition>
      </div>
    );
  }
}

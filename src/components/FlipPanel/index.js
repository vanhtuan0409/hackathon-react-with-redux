import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.styl";

export default class FlipPannel extends PureComponent {
  render() {
    const { direction, children } = this.props;
    return (
      <div className="flip-panel">
        <CSSTransition classNames={direction} timeout={300} in={true}>
          <div className="flip-card">{children}</div>
        </CSSTransition>
      </div>
    );
  }
}

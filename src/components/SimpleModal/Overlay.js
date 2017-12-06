import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import autobind from "class-autobind";
import "./Overlay.styl";

export default class Overlay extends PureComponent {
  constructor(props) {
    super(props);
    autobind(this);
  }

  _overlayClicked(e) {
    e.stopPropagation();
    this.props.onClose();
  }

  render() {
    const { children, visible } = this.props;
    const overlayCn = classNames("modal-overlay", {
      visible: visible
    });
    return (
      <CSSTransition classNames="up" timeout={300} in={visible}>
        <div className={overlayCn} onClick={this._overlayClicked}>
          {children}
        </div>
      </CSSTransition>
    );
  }
}

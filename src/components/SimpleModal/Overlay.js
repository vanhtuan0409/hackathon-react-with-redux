import React, { PureComponent } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
    return (
      <TransitionGroup>
        {visible && (
          <CSSTransition classNames="up" timeout={300}>
            <div className="modal-overlay" onClick={this._overlayClicked}>
              {children}
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  }
}

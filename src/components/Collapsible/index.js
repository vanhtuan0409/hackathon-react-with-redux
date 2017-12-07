import React, { PureComponent } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import autobind from "class-autobind";
import "./style.styl";

export default class Collapsible extends PureComponent {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      collapsed: !props.defaultOpen
    };
  }
  render() {
    const { title, children } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="collapsible">
        <div
          className="title"
          onClick={() => this.setState({ collapsed: !collapsed })}
        >
          {title}
        </div>

        <TransitionGroup>
          {!collapsed && (
            <CSSTransition classNames="collapse" timeout={300}>
              <div className="children">{children}</div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    );
  }
}

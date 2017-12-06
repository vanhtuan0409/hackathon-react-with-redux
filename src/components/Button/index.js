import React, { PureComponent } from "react";
import classNames from "classnames";
import "./style.styl";

export default class Button extends PureComponent {
  render() {
    const { children, standard, primary, icon, ...rest } = this.props;
    const btnCn = classNames("button", { standard, primary });
    return (
      <button className={btnCn} {...rest}>
        {children}
        <span>{icon}</span>
      </button>
    );
  }
}

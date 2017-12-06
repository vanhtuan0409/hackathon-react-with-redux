import React, { PureComponent } from "react";
import "./style.styl";

export default class BottomButtonGroup extends PureComponent {
  render() {
    return <div className="bottom-button-group">{this.props.children}</div>;
  }
}

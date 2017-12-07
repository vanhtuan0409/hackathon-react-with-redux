import React, { PureComponent } from "react";
import "./style.styl";

export default class LoadingPanel extends PureComponent {
  render() {
    return (
      <div className="loading-panel">
        <i className="fa fa-spinner fa-pulse" />
      </div>
    );
  }
}

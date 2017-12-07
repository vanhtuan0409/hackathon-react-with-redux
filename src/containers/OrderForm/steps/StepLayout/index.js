import React, { PureComponent } from "react";
import classNames from "classnames";
import "./style.styl";

export default class StepLayout extends PureComponent {
  render() {
    const { className, children, title, index, onBack } = this.props;

    return (
      <div className={classNames("fixed-header-panel", className)}>
        <div className="header">
          <span className="title">{title}</span>

          <span className="small">
            (Bước {index.step}/{index.total})
          </span>

          {onBack && <i className="fa fa-angle-left" onClick={onBack} />}
        </div>

        <div className="content">{children}</div>
      </div>
    );
  }
}

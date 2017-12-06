import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";

export default class SimpleModal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      <Overlay {...this.props} />,
      document.getElementById("modal-registry")
    );
  }
}

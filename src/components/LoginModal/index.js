import React, { PureComponent } from "react";
import SimpleModal from "@components/SimpleModal";
import "./style.styl";

export default class LoginModal extends PureComponent {
  render() {
    const { visible, onClose, onLogin } = this.props;
    return (
      <SimpleModal visible={visible} onClose={onClose}>
        <div className="login-modal modal">
          Login?
          <div className="" onClick={onLogin}>
            Đừng lo password, bấm đây login luôn
          </div>
        </div>
      </SimpleModal>
    );
  }
}

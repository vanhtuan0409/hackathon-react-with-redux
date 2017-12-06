import React, { PureComponent } from "react";
import { Actions } from "jumpstate";
import Fragment from "@components/Fragment";
import LoginModal from "@components/LoginModal";
import userAvatar from "@assets/img/user_avatar.png";
import "./style.styl";

export default class LoginButton extends PureComponent {
  render() {
    const { user, modalVisibility } = this.props;
    if (user) return <div>Logged in as: {user.name}</div>;

    return (
      <Fragment>
        <div className="login-button">
          <img alt="user_avatar" src={userAvatar} />

          <div className="text" onClick={Actions.auth.showModal}>
            Đăng nhập để tích điểm
          </div>

          <a className="hotline" href="tel:0909090909">
            <i className="fa fa-phone" aria-hidden="true" />
          </a>
        </div>

        <LoginModal
          visible={modalVisibility}
          onClose={Actions.auth.closeModal}
          onLogin={Actions.auth.closeModal}
        >
          asdasdasd
        </LoginModal>
      </Fragment>
    );
  }
}

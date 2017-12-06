import React, { PureComponent } from "react";
import userAvatar from "@assets/img/user_avatar.png";
import "./style.styl";

export default class LoginButton extends PureComponent {
  render() {
    return (
      <div className="login-button">
        <img alt="user_avatar" src={userAvatar} />

        <div className="text">Đăng nhập để tích điểm</div>

        <a className="hotline" href="tel:0909090909">
          <i className="fa fa-phone" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

import React, { PureComponent } from "react";

export default class LoginButton extends PureComponent {
  render() {
    return (
      <div className="login-button">
        <img alt="user_avatar" src="assets/img/user_avatar.png" />

        <div className="text">Đăng nhập để tích điểm</div>

        <a className="hotline" href="tel:0909090909">
          <i className="fa fa-phone" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

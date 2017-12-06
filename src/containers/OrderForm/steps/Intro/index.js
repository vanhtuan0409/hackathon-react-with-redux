import React, { PureComponent } from "react";
import BottomButtomGroup from "@components/BottomButtonGroup";
import Button from "@components/Button";
import appIcon from "@assets/img/appicon.png";
import tchIcon from "@assets/img/tch.jpg";
import "./style.styl";

export default class Intro extends PureComponent {
  render() {
    const { next } = this.props;
    return (
      <div className="intro-step">
        <div className="intro-step-inner">
          <div className="install-app">
            <img alt="app-icon" src={appIcon} />
            The Coffee House Mobile
            <a className="btn-install">Cài đặt ngay</a>
          </div>

          <div className="content">
            <div className="head">
              <h3>ĐẶT HÀNG VÀ GIAO TẬN NƠI TẠI</h3>
              <h2>THE COFFEE HOUSE DELIVERY</h2>
              <p>
                Đừng quên
                <em> Đăng nhập </em>
                vào tài khoản
                <em> The Coffee House Rewards </em>
                của bạn để tích điểm và nhận các ưu đãi nhé!
              </p>
            </div>

            <div className="body">
              <img alt="tch-icon" src={tchIcon} />

              <div className="order-steps">
                <h3>Các bước đặt món</h3>

                <ol>
                  <li>
                    Điền thông tin nhận hàng (tên, số điện thoại, địa chỉ nhận
                    hàng)
                  </li>
                  <li>Chọn món yêu thích</li>
                  <li>
                    Tối đa 30 phút <span className="legend"> (*) </span>bạn sẽ
                    có ngay món uống yêu thích!
                  </li>
                </ol>
              </div>

              <div className="notes">
                <p>
                  (*) Thời gian có thể khác nhau tùy thuộc vào vị trí và giao
                  thông tại thời điểm đặt hàng
                </p>
                <p>Thời gian phục vụ : 7h-20h</p>
              </div>
            </div>
          </div>
        </div>

        <BottomButtomGroup>
          <Button
            primary
            icon={<i className="fa fa-angle-right" />}
            onClick={next}
          >
            Nhập thông tin đặt hàng
          </Button>
        </BottomButtomGroup>
      </div>
    );
  }
}

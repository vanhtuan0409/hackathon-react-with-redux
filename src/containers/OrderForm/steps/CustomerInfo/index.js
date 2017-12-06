import React, { PureComponent } from "react";
import BottomButtomGroup from "@components/BottomButtonGroup";
import Button from "@components/Button";
import logoIcon from "@assets/img/logo_tch_black.png";
import optionActiveImg from "@assets/img/option_active.png";
import optionInActiveImg from "@assets/img/option_inactive.png";
import "./style.styl";

export default class CustomerInfo extends PureComponent {
  render() {
    const { next } = this.props;
    return (
      <div className="customer-info-step">
        <div className="customer-info-step-inner">
          <div className="header">
            <div className="">
              <img alt="logo" src={logoIcon} />
            </div>

            <div className="text">
              <span>Thông tin người nhận </span>
              <span className="small">(Bước 1/4)</span>
            </div>
          </div>

          <div className="form">
            <div className="form-group">
              <input className="form-control" placeholder="Tên" />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Số điện thoại" />
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <label className="delivery-time-radio">
                <img
                  alt="option"
                  src={optionInActiveImg}
                  className="option-radio"
                />
                Giao hàng ngay
              </label>
              <label className="delivery-time-radio">
                <img
                  alt="option"
                  src={optionInActiveImg}
                  className="option-radio"
                />
                Chọn thời gian
              </label>
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

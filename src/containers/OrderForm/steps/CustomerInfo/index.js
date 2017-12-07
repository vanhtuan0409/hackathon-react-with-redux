import React, { PureComponent } from "react";
import { Actions } from "jumpstate";
import get from "lodash/get";
import BottomButtomGroup from "@components/BottomButtonGroup";
import Button from "@components/Button";
import logoIcon from "@assets/img/logo_tch_black.png";
import optionActiveImg from "@assets/img/option_active.png";
import optionInActiveImg from "@assets/img/option_inactive.png";
import "./style.styl";

export default class CustomerInfo extends PureComponent {
  render() {
    const { data, next } = this.props;
    const deliver_now = get(data, "customer.deliver_now", false);
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
              <input
                className="form-control"
                placeholder="Tên"
                value={get(data, "customer.name", "")}
                onChange={event =>
                  Actions.form.setFormData({
                    name: "customer.name",
                    data: event.target.value
                  })
                }
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Số điện thoại"
                value={get(data, "customer.phone", "")}
                onChange={event =>
                  Actions.form.setFormData({
                    name: "customer.phone",
                    data: event.target.value
                  })
                }
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Email"
                value={get(data, "customer.email", "")}
                onChange={event =>
                  Actions.form.setFormData({
                    name: "customer.email",
                    data: event.target.value
                  })
                }
              />
            </div>
            <div className="form-group">
              <label
                className="delivery-time-radio"
                onClick={() =>
                  Actions.form.setFormData({
                    name: "customer.deliver_now",
                    data: true
                  })
                }
              >
                <img
                  alt="option"
                  src={deliver_now ? optionActiveImg : optionInActiveImg}
                  className="option-radio"
                />
                Giao hàng ngay
              </label>
              <label
                className="delivery-time-radio"
                onClick={() =>
                  Actions.form.setFormData({
                    name: "customer.deliver_now",
                    data: false
                  })
                }
              >
                <img
                  alt="option"
                  src={!deliver_now ? optionActiveImg : optionInActiveImg}
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

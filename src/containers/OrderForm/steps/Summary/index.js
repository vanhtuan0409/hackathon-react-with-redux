import React, { PureComponent } from "react";
import { Actions } from "jumpstate";
import BottomButtomGroup from "@components/BottomButtonGroup";
import Button from "@components/Button";
import StepLayout from "../StepLayout";
import Bill from "./Bill";
import "./style.styl";

export default class Summary extends PureComponent {
  renderCustomerInfo() {
    const { data: { customer } } = this.props;
    return (
      <div className="" onClick={() => Actions.form.goToStep(2)}>
        {customer.name} - {customer.phone}
      </div>
    );
  }

  renderLocation() {
    const { data: { location } } = this.props;
    return (
      <div className="" onClick={() => Actions.form.goToStep(3)}>
        {location.address}, {location.district}, {location.city}
      </div>
    );
  }

  render() {
    const { data: { items }, next, previous } = this.props;
    return (
      <StepLayout
        className="summary-step"
        title="Đơn hàng"
        index={{ step: 4, total: 4 }}
        onBack={previous}
      >
        <div className="summary-step-inner">
          <div className="header-separator" />
          <Bill items={Object.values(items)} />
          {this.renderCustomerInfo()}
          {this.renderLocation()}
        </div>

        <BottomButtomGroup>
          <Button standard onClick={previous}>
            Chọn thêm món
          </Button>
          <Button primary onClick={next}>
            Đặt hàng
          </Button>
        </BottomButtomGroup>
      </StepLayout>
    );
  }
}

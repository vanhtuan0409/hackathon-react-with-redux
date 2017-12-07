import React, { PureComponent } from "react";
import BottomButtomGroup from "@components/BottomButtonGroup";
import Button from "@components/Button";
import StepLayout from "../StepLayout";
import "./style.styl";

export default class Summary extends PureComponent {
  render() {
    const { data, next, previous } = this.props;
    return (
      <StepLayout
        className="summary-step"
        title="Đơn hàng"
        index={{ step: 4, total: 4 }}
        onBack={previous}
      >
        <div className="summary-step-inner">
          <div className="header-separator" />
          asdasd
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

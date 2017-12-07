import React, { PureComponent } from "react";
import { Actions } from "jumpstate";
import get from "lodash/get";
import BottomButtomGroup from "@components/BottomButtonGroup";
import Button from "@components/Button";
import StepLayout from "../StepLayout";
import "./style.styl";

export default class Location extends PureComponent {
  render() {
    const { title, next, previous } = this.props;
    return (
      <StepLayout
        className="location-step"
        title={title}
        index={{ step: 2, total: 4 }}
        onBack={previous}
      >
        <div className="form-panel">
          <div className="form">
            <div className="form-group">
              <input className="form-control" />
            </div>
            <div className="dual-panel">
              <div className="form-group">
                <input className="form-control" />
              </div>
              <div className="form-group">
                <input className="form-control" />
              </div>
            </div>
          </div>
        </div>

        <div className="mock-map" />

        <BottomButtomGroup>
          <Button
            primary
            icon={<i className="fa fa-angle-right" />}
            onClick={next}
          >
            Chọn món
          </Button>
        </BottomButtomGroup>
      </StepLayout>
    );
  }
}

import React, { PureComponent } from "react";
import { Actions } from "jumpstate";
import get from "lodash/get";
import BottomButtomGroup from "@components/BottomButtonGroup";
import Button from "@components/Button";
import StepLayout from "../StepLayout";
import "./style.styl";

export default class Location extends PureComponent {
  render() {
    const { title, next, previous, data } = this.props;
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
              <input
                className="form-control"
                value={get(data, "location.address", "")}
                onChange={event =>
                  Actions.form.setFormData({
                    name: "location.address",
                    data: event.target.value
                  })
                }
              />
            </div>
            <div className="dual-panel">
              <div className="form-group">
                <input
                  className="form-control"
                  value={get(data, "location.district", "")}
                  onChange={event =>
                    Actions.form.setFormData({
                      name: "location.district",
                      data: event.target.value
                    })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={get(data, "location.city", "")}
                  onChange={event =>
                    Actions.form.setFormData({
                      name: "location.city",
                      data: event.target.value
                    })
                  }
                />
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

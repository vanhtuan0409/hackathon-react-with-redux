import React, { PureComponent } from "react";
import { Actions } from "jumpstate";
import Intro from "./steps/Intro";
import Location from "./steps/Location";
import SelectItem from "./steps/SelectItem";
import Summary from "./steps/Summary";

export default class OrderForm extends PureComponent {
  render() {
    const { currentStep } = this.props;
    return (
      <div>
        {currentStep === 1 && (
          <Intro
            previous={Actions.form.goToPreviousStep}
            next={Actions.form.goToNextStep}
          />
        )}
        {currentStep === 2 && (
          <Location
            previous={Actions.form.goToPreviousStep}
            next={Actions.form.goToNextStep}
          />
        )}
        {currentStep === 3 && (
          <SelectItem
            previous={Actions.form.goToPreviousStep}
            next={Actions.form.goToNextStep}
          />
        )}
        {currentStep === 4 && (
          <Summary
            previous={Actions.form.goToPreviousStep}
            next={Actions.form.goToNextStep}
          />
        )}
      </div>
    );
  }
}

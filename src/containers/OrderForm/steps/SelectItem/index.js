import React, { PureComponent } from "react";
import { Actions } from "jumpstate";
import { connect } from "react-redux";
import LoadingPanel from "@components/LoadingPanel";
import BottomButtomGroup from "@components/BottomButtonGroup";
import Button from "@components/Button";
import StepLayout from "../StepLayout";

class SelectItem extends PureComponent {
  componentDidMount() {
    Actions.loadProductAndCategory();
  }

  render() {
    const { title, isError, loading, next, previous } = this.props;

    return (
      <StepLayout
        className="location-step"
        title={title}
        index={{ step: 2, total: 4 }}
        onBack={previous}
      >
        {loading && <LoadingPanel />}
        {!loading && <p>asdasdasd</p>}

        <BottomButtomGroup>
          <Button
            primary
            disabled={isError}
            icon={<i className="fa fa-angle-right" />}
            onClick={next}
          >
            Xem giỏ hàng
          </Button>
        </BottomButtomGroup>
      </StepLayout>
    );
  }
}

const mapStateToProps = state => ({ ...state.products });
export default connect(mapStateToProps)(SelectItem);

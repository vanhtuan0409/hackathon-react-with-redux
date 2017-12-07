import React, { PureComponent } from "react";
import { Actions } from "jumpstate";
import { connect } from "react-redux";
import LoadingPanel from "@components/LoadingPanel";
import BottomButtomGroup from "@components/BottomButtonGroup";
import Button from "@components/Button";
import Collapsible from "@components/Collapsible";
import StepLayout from "../StepLayout";
import "./style.styl";

class SelectItem extends PureComponent {
  componentDidMount() {
    Actions.loadProductAndCategory();
  }

  renderGroups() {
    const { groups } = this.props;
    return groups.map(g => (
      <Collapsible
        key={g.group}
        title={<div className="group-title">{g.title}</div>}
      >
        <div className="products" />
      </Collapsible>
    ));
  }

  render() {
    const { title, isError, loading, next, previous } = this.props;

    return (
      <StepLayout
        className="items-step"
        title={title}
        index={{ step: 2, total: 4 }}
        onBack={previous}
      >
        {loading && <LoadingPanel />}
        {!loading && this.renderGroups()}

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

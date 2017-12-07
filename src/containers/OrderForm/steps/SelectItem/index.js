import React, { PureComponent } from "react";
import { Actions } from "jumpstate";
import { connect } from "react-redux";

class SelectItem extends PureComponent {
  componentDidMount() {
    Actions.loadProductAndCategory();
  }

  render() {
    const { next, previous } = this.props;
    return (
      <div>
        <p>SelectItem</p>
        <button onClick={previous}>Go to previous</button>
        <button onClick={next}>Go to next</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.products });
export default connect(mapStateToProps)(SelectItem);

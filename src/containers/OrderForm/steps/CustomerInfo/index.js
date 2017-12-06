import React, { PureComponent } from "react";

export default class CustomerInfo extends PureComponent {
  render() {
    const { next, previous } = this.props;
    return (
      <div>
        <p>Customer Info</p>
        <button onClick={previous}>Go to previous</button>
        <button onClick={next}>Go to next</button>
      </div>
    );
  }
}

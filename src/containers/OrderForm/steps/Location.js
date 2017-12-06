import React, { PureComponent } from "react";

export default class Location extends PureComponent {
  render() {
    const { next, previous } = this.props;
    return (
      <div>
        <p>Location</p>
        <button onClick={previous}>Go to previous</button>
        <button onClick={next}>Go to next</button>
      </div>
    );
  }
}

import React, { PureComponent } from "react";

export default class Intro extends PureComponent {
  render() {
    const { next, previous } = this.props;
    return (
      <div>
        <p>Intro</p>
        <button onClick={previous}>Go to previous</button>
        <button onClick={next}>Go to next</button>
      </div>
    );
  }
}

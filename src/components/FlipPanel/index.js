import React, { PureComponent } from "react";
import {
  TransitionGroup,
  Transition,
  CSSTransition
} from "react-transition-group";
import "./style.styl";

export default class FlipPannel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      direction: "no-slide"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndex !== this.props.selectedIndex) {
      this.setState({
        show: !this.state.show,
        direction:
          nextProps.selectedIndex > this.props.selectedIndex
            ? "slide-up"
            : "slide-down"
      });
    }
  }

  render() {
    const { children, selectedIndex } = this.props;
    const { direction } = this.state;
    return (
      <TransitionGroup className="flip-panel">
        <CSSTransition key={selectedIndex} classNames={direction} timeout={300}>
          <div className="flip-card">{children}</div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

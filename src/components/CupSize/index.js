import React, { PureComponent } from "react";
import cupMA from "@assets/img/cup/coffe-cup-m-a.png";
import cupM from "@assets/img/cup/coffe-cup-m.png";
import cupSA from "@assets/img/cup/coffe-cup-s-a.png";
import cupS from "@assets/img/cup/coffe-cup-s.png";

export default class CupSize extends PureComponent {
  render() {
    const { size, active, ...rest } = this.props;
    let selectedImg;
    if (size === "s" && active) selectedImg = cupS;
    if (size === "s" && !active) selectedImg = cupSA;
    if (size === "m" && active) selectedImg = cupM;
    if (size === "m" && !active) selectedImg = cupMA;
    return <img alt="cup-size" src={selectedImg} {...rest} />;
  }
}

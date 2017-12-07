import React, { PureComponent } from "react";
import autobind from "class-autobind";
import classNames from "classnames";
import CupSize from "@components/CupSize";

export default class Product extends PureComponent {
  constructor(props) {
    super(props);
    autobind(this);
  }

  renderSize(size) {
    const sizeQty = 0;
    return (
      <div
        key={size.name}
        className={classNames("size", `size-${size.name}`, { active: sizeQty })}
      >
        <div className="icon">
          <CupSize size={size.name} active={sizeQty > 0} />
          {!!sizeQty && <div className="qty">{sizeQty}</div>}
        </div>
        <div className="price">{size.price / 1000}k</div>
      </div>
    );
  }

  render() {
    const { product } = this.props;
    const apiUrl = "https://api.tch.vn/images";
    const productImgUrl = `${apiUrl}/products/${product.id}.jpg`;

    return (
      <div className="product">
        <div
          className="show-off"
          style={{
            backgroundImage: `url(${productImgUrl})`
          }}
        >
          <div className="name">{product.name}</div>
        </div>
        <div
          className={classNames("selector", `selector-${product.sizes.length}`)}
        >
          {product.sizes.map(this.renderSize)}
        </div>
      </div>
    );
  }
}

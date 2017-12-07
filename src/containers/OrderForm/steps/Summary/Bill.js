import React, { PureComponent } from "react";
import autobind from "class-autobind";
import "./Bill.styl";

export default class Bill extends PureComponent {
  constructor(props) {
    super(props);
    autobind(this);
  }

  renderItem(item, i) {
    const sizes = Object.values(item.sizes);
    return (
      <div className="bill-item" key={item.info.id}>
        <div className="product-name">
          {i + 1}. {item.info.name}
          <div className="sizes">
            {sizes.map(size => (
              <div className="size" key={size.name}>
                <div className="name-price">
                  {{ m: "Regular", s: "Small" }[size.name]}
                  ({size.price})
                </div>
                <div className="qty">
                  <i className="fa fa-minus-square icon-minus-order" />

                  <div className="center">x {size.quantity}</div>

                  <i className="fa fa-plus-square icon-plus-order" />
                </div>
                <div className="total">{size.quantity * size.price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sizes" />
      </div>
    );
  }

  render() {
    const { items } = this.props;
    const total = 0;
    return (
      <div className="bill-items">
        {items.map(this.renderItem)}
        <hr />
        Nhập mã coupon
        <hr />
        Thành tiền: {total}
      </div>
    );
  }
}

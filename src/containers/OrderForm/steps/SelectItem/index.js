import React, { PureComponent } from "react";
import get from "lodash/get";
import { Actions } from "jumpstate";
import { connect } from "react-redux";
import LoadingPanel from "@components/LoadingPanel";
import BottomButtomGroup from "@components/BottomButtonGroup";
import Button from "@components/Button";
import Collapsible from "@components/Collapsible";
import Product from "./Product";
import StepLayout from "../StepLayout";
import "./style.styl";

class SelectItem extends PureComponent {
  componentDidMount() {
    Actions.loadProductAndCategory();
  }

  renderProduct(product) {
    const { data: { items } } = this.props;
    const selectedSize = get(items, `${product.id}.sizes`, {});
    return (
      <Product
        key={product.id}
        product={product}
        onSelectSize={size =>
          Actions.form.addItem({
            product,
            size
          })
        }
        selectedSize={selectedSize}
      />
    );
  }

  renderGroups() {
    const { groups, products, data: { groupCount } } = this.props;
    return groups.map(g => {
      const quantity = groupCount[g.group] || 0;
      return (
        <Collapsible
          key={g.group}
          title={
            <div className="group-title">
              {g.title}
              {quantity > 0 && <div className="qty">{quantity}</div>}
            </div>
          }
        >
          <div className="products">
            {products
              .filter(p => p.group === g.group)
              .map(p => this.renderProduct(p))}
          </div>
        </Collapsible>
      );
    });
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
        <div className="items-step-inner">
          {loading && <LoadingPanel />}
          {!loading && this.renderGroups()}
        </div>

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

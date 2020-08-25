import React, { Component, Fragment } from "react";
import { ProductConsumer } from "../../../../context";
import Product from "../Product/Product";

export class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container-fluid container-lool">
            <div className="row">
              <ProductConsumer>
                {(value) =>
                  value.Products.map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      addToCart={this.props.addToCart}
                      removeFromCart={this.props.removeFromCart}
                      favoriteProduct={this.props.favoriteProduct}
                      unFavoriteProduct={this.props.unFavoriteProduct}
                      getProductId={this.props.getProductId}
                      {...this.props}
                    />
                  ))
                }
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductList;

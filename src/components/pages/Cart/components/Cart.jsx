import React, { Component, Fragment } from "react";

import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import Title from "../../Title";

export default class Cart extends Component {
  checkIEmpty = (array) => {
    let tempArray = [];

    array.map((element) =>
      element.inCart === true ? tempArray.push(element) : null
    );

    return tempArray.length === 0 ? true : false;
  };

  componentDidMount(){
    this.props.addTotal()
  }
  render() {
    return (
      <div className="container-fluid">
        {this.checkIEmpty(this.props.Products) ? (
          <EmptyCart></EmptyCart>
        ) : (
          <Fragment>
            <Title name="your" title="Cart"/>
            <CartColumns></CartColumns>
            <CartList Products={this.props.Products} increment={this.props.increment} decrement={this.props.decrement} {...this.props}></CartList>
            <CartTotals Products={this.props.Products} {...this.props}></CartTotals>
          </Fragment>
        )}
      </div>
    );
  }
}

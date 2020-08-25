import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CartTotals({
  cartSubTotal,
  cartTax,
  cartTotal,
  clearCart,
  addTotal,
}) {
  //const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
  return (
    <Fragment>
      <div className="container">
        <div
          className="col-10 mt-2 ml-sm-5 ml-md-auto 
               col-sm-8 text-capitalze text-right
               "
        >
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase
                        mb-3 px-5"
              type="button"
              onClick={async () => {
               
                  
                try {
                    await   clearCart()
                    addTotal();
                  } catch (error) {
                    console.log(error);
                  }
                 
              }}
            >
              clear cart
            </button>
          </Link>
          <h5>
            <span className="text-title">subtotal :</span>
            <strong> Ghc {cartSubTotal.toFixed(2)}</strong>
          </h5>
          <h5>
            <span className="text-title">tax :</span>
            <strong> Ghc {cartTax.toFixed(2)}</strong>
          </h5>
          <h5>
            <span className="text-title">Total :</span>
            <strong> Ghc {cartTotal.toFixed(2)}</strong>
          </h5>
        </div>
      </div>
    </Fragment>
  );
}

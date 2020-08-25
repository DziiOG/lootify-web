import { connect } from "react-redux";

import Cart from "../components/Cart.jsx";
import {
  addTotal,
  increment,
  decrement,
  clearCart,
} from "../../../store/modules/uiReducer/uiReducer.js";
import { removeFromCart } from "../../../store/modules/dataReducer/dataReducer.js";

const mapStateToProps = (state) => ({
  Products: state.UI.Products,
  cartSubTotal: state.UI.cartSubTotal,
  cartTotal: state.UI.cartTotal,
  cartTax: state.UI.cartTax
});

const mapActionsCreators = {
  addTotal,
  increment,
  decrement,
  clearCart,
  removeFromCart
};

export default connect(mapStateToProps, mapActionsCreators)(Cart);

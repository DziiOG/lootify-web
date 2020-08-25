import { connect } from "react-redux";

import Home from "../components/Home.jsx";
import {
  getUserCart,
  getUserFavorites,
  getProductsFromMongo,
  addToCart,
  removeFromCart,
  favoriteProduct,
  unFavoriteProduct,
} from "../../../store/modules/dataReducer/dataReducer.js";
import { getProductId, addTotal } from "../../../store/modules/uiReducer/uiReducer.js";

const mapStateToProps = (state) => ({
  Products: state.UI || [],
  LOADING: state.UI.data_loading
});


const mapActionsCreators = {
  getUserCart,
  getUserFavorites,
  getProductsFromMongo,
  addToCart,
  removeFromCart,
  favoriteProduct,
  unFavoriteProduct,
  getProductId,
  addTotal
};

export default connect(mapStateToProps, mapActionsCreators)(Home);

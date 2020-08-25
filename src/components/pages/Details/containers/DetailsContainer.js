import { connect } from "react-redux";

import Details from "../components/Details.js";
import { unFavoriteProduct, favoriteProduct, addToCart } from "../../../store/modules/dataReducer/dataReducer.js";

const mapStateToProps = (state) => ({
product: state.UI.product || {}
});

const mapActionsCreators = {
 unFavoriteProduct,
 favoriteProduct,
 addToCart  
};


export default connect(mapStateToProps, mapActionsCreators)(Details);

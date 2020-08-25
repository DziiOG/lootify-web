import { connect } from "react-redux";

import Favorites from "../components/Favorites.jsx";
import { addToCart } from "../../../store/modules/dataReducer/dataReducer.js";
import { getProductId } from "../../../store/modules/uiReducer/uiReducer.js";

const mapStateToProps = (state) => ({
 Products: state.UI.Products || [],
 Favorites: state.UI.favorites || []
});


const mapActionsCreators = {
    addToCart,
    getProductId
};

export default connect(mapStateToProps, mapActionsCreators)(Favorites);

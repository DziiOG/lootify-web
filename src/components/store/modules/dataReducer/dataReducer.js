import update from "react-addons-update";
import constants from "../actionConstants";
import axios from "axios";
import { addTotal } from "../uiReducer/uiReducer";

const {
  GET_USER_DATA,
  DATA_LOADING,
  GET_TOKEN,
  SET_ERRORS,
  DISABLE_BUTTON,
  GET_PRODUCTS,
  GET_USER_FAVORITES,
  GET_USER_CART,
  FAVORITE_PRODUCT,
  UNFAVORITE_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} = constants;

//Actions
export function loginUser(userDetails, history) {
  return (dispatch) => {
    dispatch({
      type: DATA_LOADING,
      payload: true,
    });

    dispatch({
      type: DISABLE_BUTTON,
      payload: true,
    });

    axios
      .post("/auth/signin", userDetails)
      .then((res) => {
        dispatch({
          type: GET_TOKEN,
          payload: res.data.token,
        });
        const FBIToken = `Bearer ${res.data.token}`;

        axios.defaults.headers.common["Authorization"] = FBIToken;
      })
      .then(() => {
        axios
          .get("/user")
          .then((res) => {
            dispatch({
              type: GET_USER_DATA,
              payload: res.data,
            });

            dispatch({
              type: DISABLE_BUTTON,
              payload: false,
            });
            dispatch({
              type: DATA_LOADING,
              payload: false,
            });

            history.push("/home");
          })
          .catch((err) => {
            console.log(err);
            dispatch({
              type: SET_ERRORS,
              payload: err,
            });
            dispatch({
              type: DISABLE_BUTTON,
              payload: false,
            });
            dispatch({
              type: DATA_LOADING,
              payload: false,
            });
          });
      })
      .catch((err) => {
        console.log(err);

        dispatch({
          type: SET_ERRORS,
          payload: err,
        });

        dispatch({
          type: DISABLE_BUTTON,
          payload: false,
        });

        dispatch({
          type: DATA_LOADING,
          payload: false,
        });
      });
  };
}

export function signupUser(newUserData, history) {
  return (dispatch) => {
    dispatch({
      type: DATA_LOADING,
      payload: true,
    });

    dispatch({
      type: DISABLE_BUTTON,
      payload: true,
    });

    axios
      .post("/auth/register", newUserData)
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        let userData = {
          email: newUserData.email,
          password: newUserData.password,
        };
        dispatch(loginUser(userData, history));
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_ERRORS,
          payload: err,
        });

        dispatch({
          type: DISABLE_BUTTON,
          payload: false,
        });

        dispatch({
          type: DATA_LOADING,
          payload: false,
        });
      });
  };
}
export function getProductsFromMongo() {
  return (dispatch) => {
    dispatch({
      type: DATA_LOADING,
      payload: true,
    });

    axios
      .get("/products")
      .then((res) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        });
       
      }).then(async ()=>{
       await dispatch(getUserCart())
      }).then(async()=> {
        await dispatch(getUserFavorites())
      }).then(()=>{
        dispatch(addTotal())
      })
      .then(()=>{
        dispatch({
          type: DATA_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err,
        });

        dispatch({
          type: DATA_LOADING,
          payload: false,
        });
      });
  };
}

export function getUserFavorites() {
  return (dispatch) => {
    dispatch({
      type: DATA_LOADING,
      payload: true,
    });

    axios
      .get("/user/favorites")
      .then((res) => {
        dispatch({
          type: DATA_LOADING,
          payload: false,
        });

        dispatch({
          type: GET_USER_FAVORITES,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: DATA_LOADING,
          payload: false,
        });

        dispatch({
          type: SET_ERRORS,
          payload: err,
        });
      });
  };
}

export function getUserCart() {
  return (dispatch) => {
    dispatch({
      type: DATA_LOADING,
      payload: true,
    });

    axios
      .get("/user/cart")
      .then((res) => {
        dispatch({
          type: DATA_LOADING,
          payload: false,
        });

        dispatch({
          type: GET_USER_CART,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: DATA_LOADING,
          payload: false,
        });

        dispatch({
          type: SET_ERRORS,
          payload: err,
        });
      });
  };
}

export function favoriteProduct(productId) {
  return (dispatch) => {
    dispatch({
      type: FAVORITE_PRODUCT,
      payload: productId,
    });
    axios
      .post(`/user/${productId}/favorites`)
      .then(() => {})
      .catch((err) => {
        dispatch({ type: SET_ERRORS, payload: err });
        dispatch({
          type: UNFAVORITE_PRODUCT,
          payload: productId,
        });
      });
  };
}

export function unFavoriteProduct(productId) {
  return (dispatch) => {
    dispatch({
      type: UNFAVORITE_PRODUCT,
      payload: productId,
    });
    axios
      .delete(`/user/${productId}/favorites`)
      .then(() => {})
      .catch((err) => {
        dispatch({ type: SET_ERRORS, payload: err });
        dispatch({
          type: FAVORITE_PRODUCT,
          payload: productId,
        });
      });
  };
}

export function addToCart(productId) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: productId,
    });
    axios
      .post(`/user/${productId}/cart`)
      .then(() => {})
      .catch((err) => {
        dispatch({ type: SET_ERRORS, payload: err });
        dispatch({
          type: REMOVE_FROM_CART,
          payload: productId,
        });
      });
  };
}

export function removeFromCart(productId) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });
    axios
      .delete(`/user/${productId}/cart`)
      .then(() => {})
      .catch((err) => {
        dispatch({ type: SET_ERRORS, payload: err });
        dispatch({
          type: ADD_TO_CART,
          payload: productId,
        });
      });
  };
}

//handle Data Actions
function handleGetToken(state, action) {
  return update(state, {
    token: {
      $set: action.payload,
    },
  });
}

function handleGetProductsFromMongo(state, action) {
  return update(state, {
    products: {
      $set: action.payload,
    },
  });
}

const ACTION_HANDLERS = {
  GET_TOKEN: handleGetToken,
  GET_PRODUCTS: handleGetProductsFromMongo,
};

const initialState = {
  token: "",
  products: [],
};

export function dataReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

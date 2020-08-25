import update from "react-addons-update";
import constants from "../actionConstants";
import axios from "axios";
import { removeFromCart } from "../dataReducer/dataReducer";

 const { GET_PRODUCT_ID, INCREMENT, DECREMENT, REMOVE_PRODUCT, ADD_TOTALS, CLEAR_CART } = constants;

//Actions
export function getProductId(id){
  return((dispatch)=> {
    dispatch({
      type: GET_PRODUCT_ID,
      payload: id
    })
  })
}
export function increment(id){
  return((dispatch)=> {
    dispatch({
      type: INCREMENT,
      payload: id
    })
  })
}

export function clearCart(){
  return((dispatch)=> {
    dispatch({
      type: CLEAR_CART,
      payload: null
    })
  })
}

export function addTotal(){
  return((dispatch)=> {
    dispatch({
      type: ADD_TOTALS,
      payload: null
    })
  })
}

export function decrement(id){
  return((dispatch)=> {
    dispatch({
      type: DECREMENT,
      payload: id
    })
  })
}

function setProductToStore(state, action){
  let tempProducts = [...state.Products];

  const product = state.Products.find((item) => item.id === action.payload);

  const index = tempProducts.indexOf(product);

  const obtainedProduct = tempProducts[index];

  return {
    ...state,
    product: obtainedProduct
  }
}

function handleGetUserData(state, action) {
  return update(state, {
    userDetails: {
      $set: action.payload,
    },
  });
}

function handleDataLoading(state, action) {
  return update(state, {
    data_loading: {
      $set: action.payload,
    },
  });
}

function handleErrors(state, action) {
  return update(state, {
    errors: {
      $set: action.payload,
    },
  });
}

function handleDisableButton(state, action) {
  return update(state, {
    disable_button: {
      $set: action.payload,
    },
  });
}

function handleGetUserFavorites(state, action) {
  let temProducts = [...state.Products];

  action.payload.forEach((element) => {
    temProducts.map((item) => {
      if (element._id === item.id) {
        item.favorite = true;
      }
    });
  });

  return {
    ...state,
    Products: [...temProducts],
    favorites: [...action.payload],
  };
}

function handleGetUserCart(state, action) {
  let tempProducts = [...state.Products];
  let tempCart = [...action.payload];

  action.payload.forEach((element) => {
    tempProducts.map((item) => {
      if (element._id === item.id) {
        item.inCart = true;
        item.count = 1;
        const price = item.price;
        item.total = price;
       
      }
    });
  });




  //console.log(tempProducts);

  return {
    ...state,
    Products: [...tempProducts],
    cart: [...tempCart],
  };
}

function handleGetProductsFromMongo(state, action) {
  let products = action.payload;
  let tempProducts = [];

  products.forEach((element) => {
    let image;
    let string =
      "C:\\Users\\Whitson\\Desktop\\Porn\\Backend stuff\\mongodb\\lootify\\pictures\\";

    image = element.image.replace(string, "");

    tempProducts.push({
      id: element._id,
      title: element.title,
      price: element.price,
      description: element.descriptionOfProduct,
      company: element.company,
      image: image,
      outOfStock: element.outOfStock,
      createdAt: element.createdAt,
      inCart: false,
      favorite: false,
      product: {}
    });
  });

  //console.log(tempProducts)

  return {
    ...state,
    Products: [...tempProducts], 
  };
}

function handleFavoriteProduct(state, action) {
  let tempProducts = [...state.Products];

  const product = state.Products.find((item) => item.id === action.payload);

  const index = tempProducts.indexOf(product);

  const obtainedProduct = tempProducts[index];

  if (obtainedProduct.favorite === false) {
    obtainedProduct.favorite = true;
  }

  return {
    ...state,
    Products: [...tempProducts],
    favorites: [...state.favorites, obtainedProduct],
  };
}

function handleUnFavoriteProduct(state, action) {
  let tempProducts = [...state.Products];
  let tempFavorites = [...state.favorites];

  tempFavorites = tempFavorites.filter((item) => item.id !== action.payload);

  const product = state.Products.find((item) => item.id === action.payload);

  const index = tempProducts.indexOf(product);

  const removedProduct = tempProducts[index];

  if (removedProduct.favorite === true) {
    removedProduct.favorite = false;
  }

  return {
    ...state,
    Products: [...tempProducts],
    favorites: [...tempFavorites],
  };
}

function handleAddToCart(state, action) {
  let tempProducts = [...state.Products];

  const product = state.Products.find((item) => item.id === action.payload);

  const index = tempProducts.indexOf(product);

  const obtainedProduct = tempProducts[index];

  obtainedProduct.inCart = true;
  obtainedProduct.count = 1;
  const price = obtainedProduct.price;
  obtainedProduct.total = price;

  return {
    ...state,
    Products: [...tempProducts],
    cart: [...state.cart, obtainedProduct],
  };
}

function handleRemoveFromCart(state, action) {
  let tempProducts = [...state.Products];
  let tempCart = [...state.cart];

  tempCart = tempCart.filter((item) => item.id !== action.payload);

  const product = state.Products.find((item) => item.id === action.payload);

  const index = tempProducts.indexOf(product);

  const removedProduct = tempProducts[index];

  console.log(removedProduct)

  removedProduct.inCart = false;
 removedProduct.count = 0;
  removedProduct.total = 0;

  return {
    ...state,
    Products: [...tempProducts],
    cart: [...tempCart],
  };
}

function handleIncrement(state, action){
let tempProduct = [...state.Products];
const selectedProduct = tempProduct.find(item => item.id === action.payload)

const index = tempProduct.indexOf(selectedProduct);
const product = tempProduct[index];

product.count = product.count + 1;
product.total = product.count * product.price;

return{
  ...state,
  Products: [
    ...tempProduct
  ]
}
 




}

function handleDecrement(state, action){
  let tempProduct = [...state.Products];
  const selectedProduct = tempProduct.find(item => item.id === action.payload)
  
  const index = tempProduct.indexOf(selectedProduct);
  const product = tempProduct[index];
  
  product.count = product.count - 1;
  if(product.count === 0){

    //something
    axios
    .delete(`/user/${action.payload}/cart`)
    .then(() => {
    
    })
    .catch((err) => {
     console.log(err)
    });


    let tempCart = [...state.cart];

    tempCart = tempCart.filter((item) => item.id !== action.payload);
  
    const product = state.Products.find((item) => item.id === action.payload);
  
    const index = tempProduct.indexOf(product);
  
    const removedProduct = tempProduct[index];
  
    console.log(removedProduct)
  
    removedProduct.inCart = false;
   removedProduct.count = 0;
    removedProduct.total = 0;
  
    return {
      ...state,
      Products: [...tempProduct],
      cart: [...tempCart],
    };
    
    
  }else {
    product.total = product.count * product.price
    return{
      ...state,
      Products: [
        ...tempProduct
      ]
    }
  
  }
  
  
}

function handleClearCart(state, action){
  let tempProducts = [...state.Products]

  tempProducts.forEach((product)=>{
    if(product.inCart){
      product.inCart = false;
      axios
    .delete(`/user/${product.id}/cart`)
    .then(() => {
    
    })
    .catch((err) => {
     console.log(err)
    });
    }
  })

  return {
    ...state,
    Products: [
      ...tempProducts
    ]
  }
}

function handleAddTotals(state, action){
  console.log("ADDDINGGGG")
  let subTotal = 0;
  let tempProduct = [...state.Products]
  tempProduct.map(item =>{
    if(item.inCart){
      subTotal += item.total
    }
  })

  const tempTax = parseFloat((subTotal * 0.9).toFixed(2));

  const tax = parseFloat(tempTax.toFixed(2));

  const total = parseFloat((subTotal + tax).toFixed(2))

  return {
    ...state,
    Products: [...tempProduct],
    cartSubTotal: subTotal,
    cartTax: tax,
    cartTotal: total
  }
}

const ACTION_HANDLERS = {
  DATA_LOADING: handleDataLoading,
  SET_ERRORS: handleErrors,
  GET_USER_DATA: handleGetUserData,
  DISABLE_BUTTON: handleDisableButton,
  GET_USER_FAVORITES: handleGetUserFavorites,
  GET_USER_CART: handleGetUserCart,
  GET_PRODUCTS: handleGetProductsFromMongo,
  ADD_TO_CART: handleAddToCart,
  FAVORITE_PRODUCT: handleFavoriteProduct,
  UNFAVORITE_PRODUCT: handleUnFavoriteProduct,
  REMOVE_FROM_CART: handleRemoveFromCart,
  GET_PRODUCT_ID: setProductToStore,
  INCREMENT: handleIncrement,
  DECREMENT: handleDecrement,
  CLEAR_CART: handleClearCart,
  ADD_TOTALS: handleAddTotals
};

const initialState = {
  data_loading: false,
  userDetails: {},
  errors: {},
  disable_button: false,
  favorites: [],
  Products: [],
  cart: [],
  cartTotal: 0,
  cartSubTotal: 0,
  cartTax: 0
};

export function uiReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

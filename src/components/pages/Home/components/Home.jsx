import React, { Component, Fragment } from "react";

import SearchComponent from "./SearchComponent/SearchComponent";
import Product from "./Product/Product";
import ProductList from "./ProductList/ProductList";
import axios from "axios";
import Title from "../../Title";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      addedToCart: [],
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true
    })
    try {
      await this.props.getProductsFromMongo();
     // await this.props.getUserCart();
     /// await this.props.getUserFavorites();
       this.props.addTotal();
      this.setState({
        loading: false
      })
    } catch (error) {
      console.log(error);
    }

     //console.log(axios.defaults.headers)

    //console.log(this.props.Products)
  }

  render() {
    return (
    
        <Fragment>
        {
          this.props.LOADING ?
         <div className="container-fluid">
         <div className="header-fluid-container">
           <SearchComponent />
         </div>
 
         <div className="container-fluid">
           ...LOADING
         </div>
       </div>: 
          <div className="container-fluid">
            <div className="header-fluid-container">
              <SearchComponent />
            </div>
              <Title name="our" title="Products" />
            <div>
              <ProductList
                Products={this.props.Products}
                addToCart={this.props.addToCart}
                removeFromCart={this.props.removeFromCart}
                favoriteProduct={this.props.favoriteProduct}
                unFavoriteProduct={this.props.unFavoriteProduct}
                getProductId={this.props.getProductId}
                {...this.props}
              />
            </div>
          </div>
        }
        
        </Fragment>
      
    );
  }
}

export default Home;

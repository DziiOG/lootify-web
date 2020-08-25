import React, { Component } from 'react'
import {connect} from 'react-redux';
import { loginUser, getProductsFromMongo } from './store/modules/dataReducer/dataReducer';
import jwtDecode from 'jwt-decode'
import axios from 'axios'




const ProductContext = React.createContext();

 class ProductProvider extends Component {

    state = {
       products: [],
       
    }

   async componentDidMount(){
     // console.log(this.isTokenValid())
  //  await this.props.getProductsFromMongo()

     //console.log(this.state.products)
    };
   
    componentWillUnmount(){

       
    }

    isTokenValid = () =>{
       
        const token = this.props.token
        if(token){
            const decodedToken = jwtDecode(token);
            if( decodedToken.exp * 1000 < Date.now()){
               // window.location.href = '/authenticate'

               return false;
            }else {
                const FBIToken = `Bearer ${token}`;

                axios.defaults.headers.common["Authorization"] = FBIToken;
              //  console.log(axios.defaults.headers.common["Authorization"])
                return true
            }
        }else {
            return false;
        }
    }


       
    
    render() {
        return (
           <ProductContext.Provider
           value={{...this.state,
            loginUser: this.props.loginUser,
            isTokenValid: this.isTokenValid,
            Products: this.props.Products 
           }}
           >
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
const mapStateToProps = state => ({
    products: state.Data.products || [],
    Products:state.UI.Products || [],
    token: state.Data.token
});

const mapActionsCreators = {
getProductsFromMongo,
loginUser
};




ProductProvider = connect(mapStateToProps, mapActionsCreators)(ProductProvider);
export {ProductProvider, ProductConsumer}

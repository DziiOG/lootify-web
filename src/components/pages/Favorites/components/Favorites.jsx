import React, { Component, Fragment } from "react";
import Banner from "./Banner/Banner";
import Title from "../../Title";



export class Favorites extends Component {

    checkIEmpty = (array) => {
        let tempArray = [];

       array.map((element) => (
        element.favorite === true ? tempArray.push(element) : null
       ))

        return tempArray.length === 0 ? true : false
    }
    
  render() {
    //console.log(this.props.Products)
    
    return (
        <Fragment>
            <Title name="Your" title="Favorites"></Title>
            <div className="py-5">
                <div className="container-fluid container-lool">
                    <div className="row">

                            { (this.checkIEmpty(this.props.Products)) === false ?
                                this.props.Products.map((product)=> 
                                (

                                    product.favorite === true ? <Banner getProductId={this.props.getProductId} addToCart={this.props.addToCart} product={product} /> : null
                                )
                                ) : <h1>'YOU HAVE NO FAVORITES YET...'</h1>

                                
                            }
                           
                    </div>
                </div>
            </div>
        </Fragment>
    );
  }
}

export default Favorites;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../../../../store/modules/dataReducer/dataReducer";

export class CardComponent extends Component {
  truncate = (str, len) => {
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  };
  render() {
    const { inCart, description, price, title, id, addToCart, getProductId } = this.props;
    return (
      <div className="container-fluid banner-style">
        <div className="card card-banner-style">
          <div
            style={{
              margin: 30,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "auto",
            }}
          >
            <h1
              style={{
                color: "#007bff",
              }}
            >
              {title}
            </h1>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <h3
                style={{
                  marginTop: 10,
                  color: "red",
                }}
              >
                {price}
              </h3>
               
              <div style={{
            height: '100%',
            display: 'flex',
            alignItems: 'end',
            marginTop: 10,

          }}>
            <Link to={`/product/details/${id}`} onClick={()=>{getProductId(id)}}>
              <button style={{
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                color: '#5cccee'
              }}>...more details</button>
            </Link>
          </div>
            </div>
          </div>

          <div
            className="container"
            style={{
              marginLeft: 30,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "auto",
            }}
          >
            <span>{this.truncate(description, 250)}</span>
          </div>

          <button
            type="button"
            disabled={inCart}
            className="btn btn-primary btn-lg btn-size-banner"
            onClick={()=>{addToCart(id)}}
          >
            {inCart === false ? "Add to Cart" : "In Cart"}
          </button>
        </div>
      </div>
    );
  }
}

export default CardComponent;

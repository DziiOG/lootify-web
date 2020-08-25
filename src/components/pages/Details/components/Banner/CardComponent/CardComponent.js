import React, { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

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
    const {
      inCart,
      description,
      price,
      title,
      id,
      addToCart,
      unFavoriteProduct,
      favoriteProduct,
      favorite,
      company
      
    } = this.props;

    var fav = favorite;
    var cart = inCart;
    return (
      <div className="container-fluid banner-style" style={{display: "flex", justifyContent: 'center', alignItems: "center", }}>
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
            <div
              style={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "space-between",
              }}
            >
              <h3
                style={{
                  marginTop: 10,
                  color: "red",
                }}
              >
                {price}
              </h3>
                <span>Company : {company}</span>

              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "end",
                  marginTop: 10,
                }}
              ></div>
            </div>
          </div>

          <div
            className="container"
            style={{
              marginLeft: 15,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "auto",
            }}
          >
            <span>{this.truncate(description, 400)}</span>
          
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <button
              type="button"
              disabled={inCart}
              className="btn btn-primary btn-lg btn-size-banner"
              onClick={() => {
                cart = true;
                addToCart(id);
              }}
            >
              {inCart === false ? "Add to Cart" : "In Cart"}
            </button>
            {fav ? (
              <button
              style={{
                backgtoundColor: 'white'
              }}
                type="button"
                className="btn btn-primary btn-lg btn-size-banner"
                onClick={() => {
                  
                  fav = false;
                  unFavoriteProduct(id)
                }}
                style={{ margin: 15 }}
              >
                <FavoriteIcon
                  style={{
                    color: "red",
                  }}
                ></FavoriteIcon>
              </button>
            ) : (
              <button
                type="button"
                style={{
                  backgroundColor: 'red'
                }}
                className="btn btn-primary btn-lg btn-size-banner"
                onClick={() => {
                  
                  fav = true;
                  favoriteProduct(id)
                }}
                style={{ margin: 15 }}
              >
                <FavoriteBorderOutlinedIcon
                  style={{
                  
                  }}
                ></FavoriteBorderOutlinedIcon>
              </button>
      )}
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;

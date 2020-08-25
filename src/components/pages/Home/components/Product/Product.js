import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Paper from "../../assets/paper.jpg";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import Mac from "../../assets/mac.jpeg";
import { motion } from "framer-motion";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: false,
      animateCart: {
        x: -50,
        y: 50,
      },
      animateSpan: {
        y: 0,
      },
      animateHeart: {
        x: 50,
        y: 50,
      },
      animateSpanSpan: {
        fontSize: 0,
      },
    };
  }

  animateToPrice = () => {
    if (this.state.price) {
      this.setState({
        price: false,
      });
    } else {
      this.setState({
        price: true,
      });
    }
  };

  animateCartButton = (boolean) => {
    if (boolean === true) {
      this.setState({
        animateCart: {
          x: -6,
          y: 20,
        },
      });
    } else {
      this.setState({
        animateCart: {
          x: -50,
          y: 50,
        },
      });
    }
  };

  animateHeartButton = (boolean) => {
    if (boolean === true) {
      this.setState({
        animateHeart: {
          x: 6,
          y: 20,
        },
      });
    } else {
      this.setState({
        animateHeart: {
          x: 50,
          y: 50,
        },
      });
    }
  };

  animateSpan = (boolean) => {
    if (boolean === true) {
      this.setState({
        animateSpan: {
          y: -40,
        },
        animateSpanSpan: {
          fontSize: 20,
        },
      });
    } else {
      this.setState({
        animateSpan: {
          y: 0,
        },
        animateSpanSpan: {
          fontSize: 0,
        },
      });
    }
  };

  render() {
    const { title, price, image, inCart, favorite, id } = this.props.product;
    const {
      addToCart,
      removeFromCart,
      favoriteProduct,
      unFavoriteProduct,
      getProductId,
      addTotal,
    } = this.props;

    const imageUrl = require(`../../assets/${image}`);
    return (
      <ProductWrapper className="col-16 mx-auto col-md-6 col-lg-3 my-3">
        <motion.div className="card card-style card-mobile">
          <motion.div
            whileHover={{
              y: -30,
            }}
            whileTap={{
              y: -30,
            }}
            transition={{ ease: "easeOut", duration: 1 }}
            onHoverStart={() => {
              this.animateCartButton(true);
              this.animateHeartButton(true);
              this.animateSpan(true);
            }}
            onHoverEnd={() => {
              this.animateCartButton(false);
              this.animateHeartButton(false);
              this.animateSpan(false);
            }}
            className="img-container p-5 cardImage card-style"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            onClick={() => {}}
          >
            <Link
              to={`/product/details/${id}`}
              onClick={() => {
                getProductId(id);
              }}
            >
              <img
                src={require(`../../assets/${image}`)}
                alt="product"
                width={575}
                height={300}
                className="card-img-top"
              ></img>
            </Link>
            {inCart === false ? (
              <motion.button
                animate={this.state.animateCart}
                transition={{ ease: "easeOut", duration: 1 }}
                className="cart-btn-size"
                onClick={async () => {
                  
                  try {
                    await    addToCart(id)
                    addTotal();
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                <ShoppingCartOutlinedIcon />
              </motion.button>
            ) : (
              <motion.button
                animate={this.state.animateCart}
                transition={{ ease: "easeOut", duration: 1 }}
                className="cart-btn-size"
                onClick={async () => {
                 
                  try {
                    await    removeFromCart(id)
                    addTotal();
                  } catch (error) {
                    console.log(error);
                  }
                 
                }}
              >
                <ShoppingCartIcon style={{ color: "#007bff" }} />
              </motion.button>
            )}

            {favorite === false ? (
              <motion.button
                animate={this.state.animateHeart}
                transition={{ ease: "easeOut", duration: 1 }}
                className="heart-btn-size"
                onClick={() => {
                  favoriteProduct(id);
                }}
              >
                <FavoriteBorderOutlinedIcon />
              </motion.button>
            ) : (
              <motion.button
                animate={this.state.animateHeart}
                transition={{ ease: "easeOut", duration: 1 }}
                className="heart-btn-size"
                onClick={() => {
                  unFavoriteProduct(id);
                }}
              >
                <FavoriteIcon style={{ color: "red" }} />
              </motion.button>
            )}
          </motion.div>

          {/* card footer*/}
          <div className="card-footer d-flex col-style justify-content-center">
            <motion.p
              whileHover={this.animateToPrice}
              animate={this.state.animateSpan}
              whileTap={this.animateToPrice}
             
              className="align-self-center justify-content-center mb-0"
              style={{
                fontSize: 25,
              }}
            >
              {this.state.price ? (
                <motion.span animate={this.state.animateSpan}>
                  GHC {price}
                </motion.span>
              ) : (
                <motion.span animate={this.state.animateSpan}>
                  {title}
                </motion.span>
              )}
            </motion.p>
            <motion.p
              whileHover={this.animateToPrice}
              animate={this.state.animateSpanSpan}
              whileTap={this.animateToPrice}
              
              className="align-self-center justify-content-center mb-0 mt-0"
              style={{}}
            >
              {this.state.price === false ? (
                <motion.span animate={this.state.animateSpanSpan}>
                  GHC {price}
                </motion.span>
              ) : (
                <motion.span animate={this.state.animateSpanSpan}>
                  {title}
                </motion.span>
              )}
            </motion.p>
          </div>
        </motion.div>
      </ProductWrapper>
    );
  }
}

export default Product;

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: #007bff;
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: trasparent;
    }
    .card-style {
      border-radius: 60px !important;
      border-color: #cdcdcd !important;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.5);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .heart-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: transparent;
    border: none;
    color: ${(props) =>
      props.favorite === true ? "#ff4500" : "var(--lightBlue)"};
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, -100%);
    transition: all 1s linear;
  }
  .img-container:hover .heart-btn {
    transform: translate(0, 0);
  }
  .heart-btn:hover {
    color: ${(props) => (props.favorite === true ? "#ff4500" : "#fff")};
    cursor: pointer;
    border: ${(props) =>
      props.favorite === true ? "var(--mainDark)" : "none"};
  }
  .card-footer {
    background: var(--mainBlue);
    color: var(--mainWhite);
  }

  .col-style {
    display: flex;
    flex-direction: column;
  }
`;

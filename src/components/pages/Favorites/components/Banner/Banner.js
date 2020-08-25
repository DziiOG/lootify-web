import React, { Component, Fragment } from "react";
import { BannerWrapper } from "../../../Welcome/styles/buttonContainer";
import Background from "../../../Home/assets/paper.jpg";

import CardComponent from "./CardComponent/CardComponent";

export class Banner extends Component {
  state = {};

  render() {
    const {
      inCart,
      price,
      title,
      description,
      id,
      company,
      image,
    } = this.props.product;

   

    const imageUrl = require(`../../../Home/assets/${image}`);
    return (
      <Fragment>
        <BannerWrapper
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "40%",
          }}
        >
         

          <CardComponent
            key={id}
            id={id}
            title={title}
            description={description}
            company={company}
            imageUrl={imageUrl}
            inCart={inCart}
            price={price}
            addToCart={this.props.addToCart}
            getProductId={this.props.getProductId}
          />
        </BannerWrapper>
      </Fragment>
    );
  }
}

export default Banner;

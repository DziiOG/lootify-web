import React, { Fragment } from 'react';
import Banner from './Banner/Banner';
import Title from '../../Title';

const Details = ({product, addToCart, unFavoriteProduct, favoriteProduct}) => {
    return (
        <Fragment>

            <Title name="product" title="Details"></Title>
        <div style={{
            display: 'flex',
            height: "100%",
            width: '100%'
        }}>
           <Banner addToCart={addToCart} unFavoriteProduct={unFavoriteProduct} favoriteProduct={favoriteProduct} product={product}/>
        </div>
        </Fragment>
    );
}

export default Details;

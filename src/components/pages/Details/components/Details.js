import React from 'react';
import Banner from './Banner/Banner';

const Details = ({product, addToCart, unFavoriteProduct, favoriteProduct}) => {
    return (
        <div style={{
            display: 'flex',
            height: "100%",
            width: '100%'
        }}>
           <Banner addToCart={addToCart} unFavoriteProduct={unFavoriteProduct} favoriteProduct={favoriteProduct} product={product}/>
        </div>
    );
}

export default Details;

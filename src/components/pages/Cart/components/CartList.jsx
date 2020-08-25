import React from 'react';
import CartItem from './CartItem';

export default function CartList({Products, increment, decrement, removeFromCart, addTotal}) {
   

    return (
        <div className="container-fluid">
            {Products.map(item=>{
                return (
                  item.inCart === true ?  <CartItem key={item.id} item={item} addTotal={addTotal} increment={increment} decrement={decrement} removeFromCart={removeFromCart} ></CartItem> : null
                )
            })}
           
        </div>
    )
}

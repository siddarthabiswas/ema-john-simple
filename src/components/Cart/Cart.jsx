import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
     //const {cart} =props;

     let total = 0;
     for (const product of cart){
        total = total + product.price;
     }

     console.log(cart);
    return (
        <div className='cart'>
               <h4>product summary</h4>
            <p>select item:{cart.length}</p>
            <p>Total Price:{total}</p>
            <p>Total Shipping:</p>
            <p>Tax:</p>
            <h6>Grand Total:</h6>
        </div>
    );
};

export default Cart;
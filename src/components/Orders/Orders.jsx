import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';





const Orders = () => {
    const savedCart =useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id );
        setCart(remaining);
        removeFromDb(id);
    }
    
    return (
        <div  className='shop-container'>
            <div className='order-container'>
            {
                cart.map(product => <Review
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Review>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Orders;
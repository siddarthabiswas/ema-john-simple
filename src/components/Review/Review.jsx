import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Review.css'
const Review = ({product, handleRemoveFromCart}) => {
    const {id, img,price, name, quantity } =product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-detail'>
                <p className='product-title'>{name}</p>
                <p>price:<span className='orange-text'>${price}</span></p>
                <p>Order quantity:<span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() =>handleRemoveFromCart (id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrash} /></button>
        </div>
    );
};

export default Review;
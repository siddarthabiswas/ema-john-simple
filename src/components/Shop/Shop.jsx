import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCard = getShoppingCart();
        const savedCart =[]
        //step1: get id of the addedProduct
        for (const id in storedCard) {
            //get product from products state by id
            const addedProduct = products.find(product =>product.id === id);
            if(addedProduct){
                //step:3 add quantity
                const quantity =storedCard[id];
                addedProduct.quantity =quantity;
                // step 4: add  the added product to the save cart
                savedCart.push(addedProduct)
            }
            
        }
        //step 5: set the cart
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (product) => {
        let newCart =[];
        // const newCart = [...cart, product];
        const exists = cart.find(pd => pd.id===product.id);
        if(!exists){
            product.quantity =1;
            newCart=[...cart,product]
        }
        else{
            exists.quantity =exists.quantity + 1;
            const remaining =cart.filter(pd => pd.id !== product.id);
            newCart=[...remaining,exists];
        }
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../Store/cartSlice';
import Navbar from '../Navbar/Navbar';
import "./Cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const { products, cart, total } = useSelector((state) => state.cart);
    const deleteHandler = (index, price) => {
        let deleteItem = { index, price };
        dispatch(removeFromCart(deleteItem));
    };
    return (
        <div className='main-container'>
            <Navbar />
            <div className='cart-container'>
            <h2 className='heading'>Shopping Cart</h2>
            {cart.map((item, index) => {
                return <div className='hold'>
                <li key={index} >1 X {item.newname} - ₹{item.price}</li>
                <button  onClick={() => deleteHandler(index, item.price)}>-</button>
                </div>
            })}
            
            <hr />
            <h2 className='heading'>Total Price</h2>
            <p className='total-price'>{total}</p>
            </div>
        </div>
    )
}

export default Cart;
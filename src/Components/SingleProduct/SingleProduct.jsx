import React from 'react';
import "./SingleProduct.css";
import data from '../../db/data';
import { useDispatch,useSelector } from 'react-redux';

import { addToCart,removeFromCart } from '../../Store/cartSlice';
import { useParams } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
const SingleProduct = () => {
    const dispatch = useDispatch();
    const { products, cart, total } = useSelector((state) => state.cart);
    const { id } = useParams();
    const neededData = data.find(obj => obj.id === id);
    const purchaseHandler = (e,neededData)=>{
        let newname = neededData.name; ;
        let price = parseInt(e.target.value);
        let itemObj = {newname,price};
        dispatch(addToCart(itemObj));
      }
    return (
        <>
        <Navbar />
        <div className='SingleProduct'>
            <div className='imagediv'>
                <img className='image' src={neededData.img}></img>
            </div>
            <div className='data'>
                <h1>{neededData.name}</h1>
                <h2><del>₹{neededData.oldprice}</del> ₹{neededData.newprice}+ Free Shipping</h2>
                <p>Admiration and adoration are symbolised by red carnations.</p>
                <button class="normal" value={neededData.newprice} onClick={(e)=>purchaseHandler(e,neededData)}>Add To Cart</button>
            </div>
        </div>
        </>
    )
}

export default SingleProduct;
import React from "react";
import { useDispatch,useSelector } from 'react-redux';

import { addToCart,removeFromCart } from '../../Store/cartSlice';
import "./Cards.css";
import {Link} from "react-router-dom";
function Cards({ img, title, name, newprice,oldprice,id }) {
    const dispatch = useDispatch();
    const {products,cart,total}=useSelector((state)=>state.cart);
    const purchaseHandler = (e,{ img, title, name, newprice,oldprice,id })=>{
        let newname = name ;
        let price = parseInt(e.target.value);
        let itemObj = {newname,price};
        console.log(itemObj);
        dispatch(addToCart(itemObj));
      }
    return (
    <>
            <section className="card">
                    <p className="circle">Sale!</p>

                    <figure className="cards__item__pic-wrap" >
                    <Link to={`/singleproduct/${id}`}>
                        <img src={img} alt="Travel" className="cards__item__img" />
                        </Link>
                    </figure>
                    <div className="cards__item__info">
                        <p className="type">{title}</p>
                        <p className="cards__item__text">{name}</p>
                        <p className="stars">☆☆☆☆☆</p>
                        <div className="addtocart">
                            <del>₹{oldprice}</del>
                            <p className="price">₹{newprice}</p>
                            <button value={newprice} onClick={(e)=>purchaseHandler(e,{ img, title, name, newprice,oldprice,id })} className="atc">+</button>
                        </div>

                    </div></section>
                    </>
                
                
            
    
    );
}
export default Cards;

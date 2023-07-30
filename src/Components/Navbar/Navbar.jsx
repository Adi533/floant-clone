import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const { products, cart, total, count } = useSelector((state) => state.cart);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div>
                        <Link to="/">
                            <img className='img_navbar' src="https://floant.com/wp-content/uploads/2022/11/cropped-organic-store-logo5-svg.png"></img>
                        </Link>
                    </div>
                    <div className='box'>
                        <i className='i_navbar'>Everything</i>
                        <i className='i_navbar'>Plants</i>
                        <i className='i_navbar green'>Flowers</i>
                    </div>
                </div>
                <div className="navbar-container_2">
                    <div className='box'>
                        <i className='i_navbar'>About</i>
                        <i className='i_navbar'>Contact</i>
                        <i className='i_navbar green'>₹{total}</i>
                    </div>
                    <div class="menu box">

                        <Link to="/cart" class="count">
                            <ShoppingCartIcon fontSize="medium" className='icon green' />
                            <span class="count-text green">{count}</span>
                        </Link>
                        <Person2Icon className='profile' fontSize='medium' />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
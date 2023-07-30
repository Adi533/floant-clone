import React from 'react';

const CardItem = ({img, title, name, newprice}) => {
    return (
        <div className="cards__container">
                    <p className="circle">Sale!</p>

                    <figure className="cards__item__pic-wrap" >
                        <img src={img} alt="Travel" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <p className="type">Flowers</p>
                        <p className="cards__item__text">15 Regal Carnations Basket</p>
                        <p className="stars">☆☆☆☆☆</p>
                        <div className="addtocart">
                            <p className="price">₹899</p>
                            <button className="atc">+</button>
                        </div>

                    </div>
                </div>
    )
}

export default CardItem;
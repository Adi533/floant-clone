import React from "react";
import "../Cards/Cards.css";
const Main = ({ result }) => {
    return (<div>
        <div className="container-main"><p className="small-title">Flowers/Plants</p>
            <h1 className="title">Flowers</h1></div>

        <div className="container-product">
            <div className="card-container">{result}</div>
        </div>
    </div>
    )
}

export default Main;
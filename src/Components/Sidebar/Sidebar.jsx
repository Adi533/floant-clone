import React from "react";
import "./Sidebar.css";
import Price from "../ProductFilter/Price";
const Sidebar = ({ handleChange,handleInputChange, query }) => {
    return (
        <section className="sidebar">
            <div>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search Products..."
                    onChange={handleInputChange}
                    value={query}
                />
            </div>
            <div className="texts">

                <p className="green txt">Bulk Plant(9)</p>
                <p className="green txt">Best Selling Products(10)</p>
                <p className="green txt">Flowers(17)</p>
                <p className="green txt">Plant(46)</p>
                <p className="green txt">Subsciption(10)</p>
            </div>
            <Price handleChange={handleChange} />
        </section>
    )
}

export default Sidebar;
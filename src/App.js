import './App.css';
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Main from "./Components/Main/Main.jsx";
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import products from "./db/data";
import Cards from './Components/Cards/Cards';
import Cart from './Components/Cart/Cart';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products,selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({newprice }) => newprice === selected
        );
    }
    return filteredProducts.map(
      ({ img, title, name, newprice, oldprice,id }) => (
        <Cards
          key={Math.random()}
          img={img}
          title={title}
          name={name}
          newprice={newprice}
          oldprice={oldprice}
          id={id}
        />
      ))
  }
  const result = filteredData(products, selectedCategory, query);
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className="App">
            <Navbar />
            <main>
              <div className="container">
                <Sidebar handleChange={handleChange} query={query} handleInputChange={handleInputChange} />
                <Main result={result} />
              </div>
            </main>
          </div>} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

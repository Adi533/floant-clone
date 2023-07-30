import Input from "../Input/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={799}
          title="₹0 - ₹799"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={899}
          title="₹700 - ₹899"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={999}
          title="₹800 - ₹999"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1999}
          title="Over ₹999"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
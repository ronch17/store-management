import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Customers = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      Customers
      <Link to="/Products">Products</Link>
      <button
        onClick={() => {
          navigate("/Products");
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Customers;

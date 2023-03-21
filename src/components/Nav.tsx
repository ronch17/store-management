import { Routes, Route, Link } from "react-router-dom";
import { Box, Grid, Container } from "@mui/material";
import Customers from "../pages/Customers";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import Purchases from "../pages/Purchases";
import CategoryIcon from "@mui/icons-material/Category";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import EditCustomer from "../pages/EditCustomer";

const Nav = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    display: "flex",
    alignItems: "flex-end",
    gap: "10px",
  };
  return (
    <>
      <Grid
        xs={3}
        sx={{
          //pridct/rom /:id rom
          display: "grid",
          gridGap: "30px",
          boxShadow: "0px 0px 5px 0px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/Products" style={linkStyle}>
          {<CategoryIcon />} Products
        </Link>
        <br />
        <Link to="/Customers" style={linkStyle}>
          {<GroupIcon />}Customers
        </Link>
        <br />
        <Link to="/Purchases" style={linkStyle}>
          {<ShoppingBasketIcon />}Purchases
        </Link>
      </Grid>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/Products" element={<Products />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Purchases" element={<Purchases />} />
          <Route path="/Edit-Customer" element={<EditCustomer />} />
        </Route>
      </Routes>
    </>
  );
};

export default Nav;

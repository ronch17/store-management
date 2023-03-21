import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const Products = () => {
  const storeData = useAppSelector((state) => state.store);
  const [purchases] = storeData.purchases;
  const [products] = storeData.products;
  const [customers] = storeData.customers;
  const [newProduct, setNewProduct] = useState({
    product: "",
    customer: "",
    date: new Date(),
  });
  const [showSelect, setShowSelect] = useState(false);
  const navigate = useNavigate();

  const addNewProduct = (e: any) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  console.log(newProduct);

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      background: "#6E2FEF",
    },
  }));

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Card sx={{ width: 300, padding: 1, margin: 8 }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="h6">Product Name: {products.name}</Typography>
            <Typography variant="h6">
              Product Price: {products.price}$
            </Typography>
            <br />

            <ButtonGroup>
              <IconButton aria-label="cart" sx={{ marginRight: 2 }}>
                <StyledBadge badgeContent={products.quantity} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
              <Button aria-label="reduce">
                <RemoveIcon fontSize="small" />
              </Button>
              <Button aria-label="increase">
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
        <Card sx={{ width: 300, padding: 1, margin: "63px 0px 63px 10px" }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="h6">Total Purchases</Typography>
            <Typography variant="h6">{String(purchases.date)}</Typography>
          </CardContent>
        </Card>
      </Box>
      <Card sx={{ width: 300, padding: 1, marginLeft: 8 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6">Customers who bought this:</Typography>
          <div style={{ display: "flex", gap: "5px" }}>
            <Typography variant="h6">
              {customers.fname} {customers.lname}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate("/Edit-Customer")}
            >
              Edit Customer
            </Button>
          </div>
          <Typography variant="h6">Purchased Date</Typography>
          <Button onClick={() => setShowSelect(true)}>Add New Product</Button>
          {showSelect && (
            <>
              <FormControl>
                <InputLabel id="select-products">Products</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value="product" onChange={addNewProduct}>
                    {products.name}
                  </MenuItem>
                </Select>
              </FormControl>
              <Button>Save</Button>
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default Products;

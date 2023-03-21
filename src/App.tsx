import { Box, Grid, Container } from "@mui/material";
import React from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Nav />
    </Grid>
  );
}

export default App;

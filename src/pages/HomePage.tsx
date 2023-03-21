import React from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  return (
    <Grid
      xs={9}
      sx={{
        display: "grid",
        alignItems: "center",
        alignContent: "space-between",
        padding: "0 0 10em 0",
      }}
    >
      <div style={{ background: "#6E2FEF", boxShadow: "0px 2px 2px -2px" }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "40px", color: "#fff", padding: "50px" }}
        >
          Welcome
        </Typography>
      </div>
      <Outlet />
    </Grid>
  );
};

export default HomePage;

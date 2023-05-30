import { Box } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Register from "./Register";
import Footer from "./Footer";

const Home = () => {
  return (
    <Box>
      <Navbar />

      <Register />

      <Footer />
    </Box>
  );
};

export default Home;

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import React from "react";

const Text = styled(Typography)(({ theme }) => ({
  textAlign: "center",

  fontWeight: 400,
  color: "white",

  fontFamily: "Poppins",
  fontStyle: "normal",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "18px",
  },
}));

function Footer() {
  return (
    <Box
      sx={{
        height: { xl: "80px", lg: "50px", md: "50px", sm: "50px", xs: "50px" },
        bgcolor: "#1746A2",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "4%",
      }}>
      <Text> © 2020 Vajra, All Rights Reserved </Text>
      <Text> Terms & Conditions | FAQ's </Text>
    </Box>
  );
}

export default Footer;

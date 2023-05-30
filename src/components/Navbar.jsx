import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import vajra_logo from "../images/vajra_logo.png";
import vajra_logo1 from "../images/vajra_logo1.png";

import LogoutIcon from "@mui/icons-material/Logout";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#1746A2" }}>
      <AppBar position="static" sx={{ bgcolor: "#1746A2" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // border: "1px solid black",
          }}>
          {/* <img src={vajra_logo} loading="lazy" /> */}

          <Box
            component="img"
            sx={{
              content: {
                xs: `url(${vajra_logo1})`, //img src from xs up to md
                md: `url(${vajra_logo})`, //img src from md and up
              },
            }}
            alt="Logo"
          />

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginRight: "30px",
              cursor: "pointer",
            }}>
            <LogoutIcon sx={{ color: "white", fontSize: "28px" }} />
            <Typography
              sx={{ color: "white", fontSize: "20px", fontWeight: "400" }}>
              Log out
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

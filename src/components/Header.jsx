import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = ({ onHomeClick, onArticlesClick, onTutorialsClick }) => {
  const navigate = useNavigate(); 

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ mr: 2 }}>
          DEV@Deakin
        </Typography>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, maxWidth: 650, mx: 2 }}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Search..."
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
        </Box>

        {/* Navigation Buttons */}
        <Box>
          <Button color="inherit" onClick={onHomeClick}>
            Home
          </Button>
          <Button color="inherit" onClick={onArticlesClick}>
            Articles
          </Button>
          <Button color="inherit" onClick={onTutorialsClick}>
            Tutorials
          </Button>
          <Button color="inherit">Post</Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

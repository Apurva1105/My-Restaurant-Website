import React, { useState } from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Menu = () => {
  // Track quantity for each menu item by index
  const [quantities, setQuantities] = useState(Array(MenuList.length).fill(0));

  const handleAdd = (idx) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === idx ? q + 1 : q))
    );
  };

  const handleRemove = (idx) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === idx && q > 0 ? q - 1 : q))
    );
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu, idx) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }} key={menu.name}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    ₹{menu.price}
                  </Typography>
                   console.log("apurva")
                </Box>
                <Typography variant="body2">{menu.description}</Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mt: 2 }}>
                  <IconButton color="primary" onClick={() => handleRemove(idx)}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography sx={{ mx: 1 }}>{quantities[idx]}</Typography>
                  <IconButton color="primary" onClick={() => handleAdd(idx)}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
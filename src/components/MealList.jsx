import Header from "./Header";
import Footer from "./Footer";
import MealCard from "./MealCard";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const MealList = (props) => {
  const { items } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={3} key={item.id}>
            <MealCard id={item.id} name={item.name} thumb={item.thumb} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MealList;

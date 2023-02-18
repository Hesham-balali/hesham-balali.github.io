import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Ingredient from "./Ingredients";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

const ShowMeal = (props) => {
  // console.log("hi me");
  // console.log(props);
  const data = props.items;
  console.log("show meal data:::::");
  console.log(props);

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          {" "}
          <img src={data.thumb} alt={data.name} />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h3">{data.name}</Typography>
          <Typography variant="h6">{data.instruction}</Typography>
        </Grid>
      </Grid>
      <Ingredient items={data.ingredients} />
      {/* <main className="w-3/4 mx-auto">
      <Header />
      <div className="flex flex-auto bg-slate-100 border-white rounded-3xl shadow-xl">
        <div className="w-5/12 m-5">
          <h2 className="text-2xl font-extrabold text-neutral-700">
            Ingredients:
          </h2>
          <div className="flex">
            <Ingredient className="w-3/12" items={data.ingredients} />
          </div>
        </div>
        <div className="w-5/12 m-5">
          <h2 className="text-3xl font-extrabold mb-5">{data.name}</h2>
          <p className="text-xl text-justify">{data.instruction}</p> */}
    </Card>
  );
};

export default ShowMeal;

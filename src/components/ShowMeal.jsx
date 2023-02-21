import * as React from "react";
import Ingredient from "./Ingredients";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { CardActionArea, ListItemButton } from "@mui/material";
const ShowMeal = (props) => {
  const data = props.items;
  const navigate = useNavigate();
  return (
    <Card>
      <Grid marginTop="30px" padding="20px" container spacing={2}>
        <Grid item xs={5}>
          <CardMedia
            component="img"
            // height="140"
            // width="300"
            image={data.thumb}
            alt={data.name}
          />
        </Grid>

        <Grid item xs={7}>
          <Typography marginBottom="16px" variant="h3">
            {data.name}
          </Typography>
          <Grid container spacing={1}>
            <ListItemButton
              onClick={() => {
                navigate(`../area/${data.area}`);
              }}
            >
              <Grid item xs={1}>
                <Avatar
                  alt={data.area}
                  src={require(`../img/flags/${data.area}.png`)}
                  sx={{ width: 56, height: 56 }}
                  variant="rounded"
                />
              </Grid>
              <Grid alignItems="left" alignContent="flex-start" item xs={11}>
                <Typography variant="h6">{data.area}</Typography>
              </Grid>
            </ListItemButton>
          </Grid>
          <Typography
            sx={{ fontStyle: "italic", fontWeight: 400 }}
            marginBottom="16px"
            align="justify"
            variant="h6"
          >
            {data.instruction}
          </Typography>
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

import * as React from "react";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, ListItemButton } from "@mui/material";
import CardContent from "@mui/material/CardContent";

function IngredientItem(props) {
  const { name, measure } = props;
  const navigate = useNavigate();
  return (
    // <Card>
    //   <Grid container spacing={1}>
    //     <Grid item xs={5}>
    //       <Avatar
    //         alt={name}
    //         src={`https://www.themealdb.com/images/ingredients/${name}.png`}
    //         variant="rounded"
    //       />
    //     </Grid>
    //     <Grid item xs={7}>
    //       <Typography variant="h6">{name}</Typography>
    //       <Typography variant="subtitle1">{measure}</Typography>
    //     </Grid>
    //   </Grid>
    // </Card>

    <ListItemButton
      onClick={() => {
        navigate(`../ingredient/${name}`);
      }}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            // height="140"
            width="300"
            image={`https://www.themealdb.com/images/ingredients/${name}.png`}
            alt={name}
          />
          <CardContent>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="subtitle1">{measure}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ListItemButton>

    // {/* <li className="flex basis-1/2">
    //   <div>
    //     <img
    //       className="w-12 border-white	border-2 m-2 p-1 rounded-xl shadow-lg"
    //       src={`https://www.themealdb.com/images/ingredients/${name}.png`}
    //       // src={IngredientIcon}
    //       alt=""
    //     />
    //   </div>
    //   <div className="p-1 self-center">
    //     <a href={`ingredient/${name}`}>
    //       <p className="font-semibold text-base hover:text-blue-600">{name}</p>
    //     </a>
    //     <p className="font-medium text-sm text-gray-500">{measure}</p>
    //   </div>
    // </li> */}
  );
}

export default IngredientItem;

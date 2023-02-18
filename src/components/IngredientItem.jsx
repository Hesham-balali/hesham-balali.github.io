import IngredientIcon from "../img/item.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

function IngredientItem(props) {
  const { name, measure } = props;
  return (
    <Card>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Avatar
            alt={name}
            src={`https://www.themealdb.com/images/ingredients/${name}.png`}
            variant="rounded"
          />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">{measure}</Typography>
        </Grid>
      </Grid>
    </Card>

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

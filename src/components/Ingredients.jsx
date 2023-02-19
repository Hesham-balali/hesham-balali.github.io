import IngredientItem from "./IngredientItem";
import Grid from "@mui/material/Grid";
import { Card, Divider, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";

function Ingredients(props) {
  const { items } = props;
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Card>
      <Divider variant="middle" />
      <Typography
        marginTop="50px"
        marginBottom="50px"
        align="center"
        variant="h4"
      >
        Ingredients
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {/* <ul className="flex flex-wrap"> */}
        {items.map((item, index) => (
          <Grid item xs={2}>
            <IngredientItem
              key={index}
              name={item.name}
              measure={item.measure}
            />
          </Grid>
        ))}
        {/* </ul> */}
      </Grid>
    </Card>
  );
}

export default Ingredients;

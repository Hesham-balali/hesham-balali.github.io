import IngredientItem from "./IngredientItem";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

function Ingredients(props) {
  const { items } = props;
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Card>
      <Grid container spacing={2}>
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

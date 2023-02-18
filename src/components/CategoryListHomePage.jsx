import Category from "./CategoryCardHomePage";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const CategoryList = (props) => {
  const { items } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        marginTop="50px"
        marginBottom="30px"
        align="center"
        variant="h4"
        color="textPrimary"
      >
        Categories
      </Typography>
      <Grid container spacing={1}>
        {items.map((item) => (
          <Grid item xs={2}>
            <Category
              id={item.id}
              name={item.name}
              thumb={item.thumb}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryList;

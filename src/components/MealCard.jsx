// import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import { ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MealCard = (props) => {
  const { id, name, thumb } = props;
  const navigate = useNavigate();

  return (
    <ListItemButton
      onClick={() => {
        navigate(`../meal/${id}`);
      }}
    >
      <Card>
        <CardHeader
          avatar={
            <Avatar
              alt={name}
              src="/static/images/avatar/1.jpg"
              aria-label="recipe"
              variant="rounded"
            ></Avatar>
          }
          title={name.substring(0, 20)}
          subheader={id}
        />
        <CardMedia
          component="img"
          // height="194"
          width="300"
          image={thumb}
          alt={name}
        />
      </Card>
    </ListItemButton>
  );
};

export default MealCard;

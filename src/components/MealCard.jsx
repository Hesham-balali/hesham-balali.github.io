// import { Link } from "react-router-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));
const MealCard = (props) => {
  const { id, name, thumb } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            alt={name}
            src="../img/spiderman.jpg"
            aria-label="recipe"
            variant="rounded"
          ></Avatar>
        }
        title={name.substring(0, 25)}
        subheader={id}
      />
      <CardMedia component="img" height="194" image={thumb} alt={name} />
    </Card>
  );
};

export default MealCard;

// const MealCard = (props) => {
//   const { id, name, thumb } = props;
//   return (
//     <div className="max-w-xs h-full bg-slate-100 rounded-3xl p-4 mb-6 shadow-xl">
//       <img className="rounded-3xl mb-3.5" src={thumb} alt={name} />

//       {/* <Link to={`meal/${id}`}>
//         <h3>{name}</h3>
//       </Link> */}

//       <a href={`/meal/${id}`}>
//         <h3 className="font-mono font-bold text-xl hover:text-blue-600">
//           {name}
//         </h3>
//       </a>
//     </div>
//   );
// };

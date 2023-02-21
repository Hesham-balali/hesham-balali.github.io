import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function MediaCard() {
  return (
    <Grid container justifyContent="center">
      <Box sx={{ flexGrow: 1, maxWidth: 600 }}>
        <Grid container justifyContent="center" marginTop="28px" spacing={2}>
          <Grid item xs={5}>
            <CardMedia
              sx={{ height: 300 }}
              image={require(`../img/hesham.jpg`)}
              title="hesham"
            />
            <Typography
              marginTop="16px"
              gutterBottom
              variant="h5"
              component="div"
            >
              Hesham Balali
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Junior Frontend Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Qeshm Island, Iran
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="he.shm.qeshmi@gmail.com" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <InstagramIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="heshambalali" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <GitHubIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="hesham-balali" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <TelegramIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="heshambalali" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <CallIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="+98 9173635716" />
            </ListItem>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

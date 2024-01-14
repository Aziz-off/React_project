import React from "react";
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
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ item }) {
  const [expanded, setExpanded] = React.useState(false);
  const {deleteProduct} = useProducts();

  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 305, margin: "10px"}}>
      <CardHeader title={item.title} subheader={item.year} sx={{height: "100px", textAlign: "center"}}/>
      <CardMedia
        sx={{ cursor: "pointer" }}
        component="img"
        height="300"
        image={item.picture}
        alt="Paella dish"
        onClick={() => navigate(`/details/${item.id}`)}
      />
      <CardContent>
        <Typography component="h2">
          {item.category}
        </Typography>
		<Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button
          variant="contained"
          size="small"
          sx={{ bgcolor: "#ff6347", fontWeight: 900, marginRight: "5px"}}
          onClick={() => navigate(`/edit/${item.id}`)}
        >
          Edit
        </Button>
		<Button
          variant="contained"
          size="small"
          sx={{ bgcolor: "#333333", fontWeight: 900, color: "#ff6347"}}
          onClick={() => deleteProduct(item.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

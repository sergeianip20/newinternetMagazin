import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { Intype } from "../../state/Prod-reducer";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddBasket } from "./AddBasket";
import { deleteProd } from "../../state/Prodreducer";
import { AddFavorites } from "./Addfavorites";
export const Product = (props: Intype) => {
  let dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://texdesign.ru/upload/medialibrary/832/832b8b1e834de92ab6bb9dbf3bfef848.jpg"
      />

      <CardContent>
        <Typography variant="h6">{props.e.name}</Typography>
        <Typography>{props.e.descrition}</Typography>
        <Typography>цена {props.e.price}</Typography>
      </CardContent>
      <CardActions>
        <AddBasket e={props.e} />
        <AddFavorites e={props.e} />
        <IconButton
          onClick={() => {
            dispatch(deleteProd(props.e.id));
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

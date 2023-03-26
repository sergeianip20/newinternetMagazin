import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { favoritesType } from "../../type/Favotites";
import { liveGet } from "../../state/Prodreducer";
import { favoritesCreate, favoritesDelete } from "../../state/FavoritesToolkit";
import { useDispatch } from "react-redux";

type FavoritesAddType = {
  e: {
    id: string;
    name: string;
    filter: string;
    price: string;
    descrition: string;
    live: boolean;
  };
};
export const AddFavorites = (props: FavoritesAddType) => {
  let dispatch = useDispatch();
  let liveupdate = (e: string) => {
    dispatch(liveGet({ id: e, live: !props.e.live }));
    dispatch(
      favoritesCreate({
        id: e,
        name: props.e.name,
        filter: props.e.filter,
        price: props.e.price,
        descrition: props.e.descrition
      })
    );
  };
  let livedelete = (e: string) => {
    dispatch(liveGet({ id: e, live: !props.e.live }));
    dispatch(favoritesDelete(e));
  };
  console.log(props.e.id);
  return (
    <div>
      <IconButton>
        {props.e.live ? (
          <FavoriteIcon
            onClick={() => {
              livedelete(props.e.id);
            }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={() => {
              liveupdate(props.e.id);
            }}
          />
        )}{" "}
      </IconButton>{" "}
    </div>
  );
};

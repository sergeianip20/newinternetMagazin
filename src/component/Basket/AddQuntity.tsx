import IconButton from "@mui/material/IconButton";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import {
  Incrementquantity,
  priceInCrement,
  DecrementIncrementquantity,
  priceDecrement,
  priceDecrementBasket,
  priceIncrementBasket
} from "../../state/BasketToolkit";
type PropsType = {
  id: string;
  quantity: string;
  price: string;
};

export const AddQuntity = (props: PropsType) => {
  let dispatch = useDispatch();

  let inCrement = () => {
    dispatch(
      Incrementquantity({
        id: props.id,
        price: props.price,
        quantity: props.quantity
      })
    );
    dispatch(
      priceIncrementBasket({ price: props.price, quantity: props.quantity })
    );
  };
  let deCrement = () => {
    dispatch(
      DecrementIncrementquantity({
        id: props.id,
        price: props.price,
        quantity: props.quantity
      })
    );
    dispatch(
      priceDecrementBasket({ price: props.price, quantity: props.quantity })
    );
  };
  return (
    <div>
      {props.quantity == 1 ? (
        <IconButton>
          {" "}
          <RemoveCircleOutlineIcon />
        </IconButton>
      ) : (
        <IconButton onClick={deCrement}>
          {" "}
          <RemoveCircleOutlineIcon />
        </IconButton>
      )}
      {props.quantity}
      <IconButton onClick={inCrement}>
        {" "}
        <ControlPointIcon />
      </IconButton>{" "}
    </div>
  );
};

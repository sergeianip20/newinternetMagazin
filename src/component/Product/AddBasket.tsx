import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Intype } from "../../state/Prod-reducer";
import { createBasket, priceInCrement } from "../../state/BasketToolkit";
type BasketAddType = {
  e: {
    id: string;
    name: string;
    filter: string;
    price: string;
    descrition: string;
  };
};

export const AddBasket = (props: BasketAddType) => {
  let dispatch = useDispatch();
  let BasketAdd = () => {
    dispatch(
      createBasket({
        name: props.e.name,
        price: props.e.price,
        descrition: props.e.descrition
      })
    );
    dispatch(priceInCrement(props.e.price));
  };
  return (
    <div>
      <Button
        onClick={() => {
          BasketAdd();
        }}
      >
        Купить
      </Button>
    </div>
  );
};

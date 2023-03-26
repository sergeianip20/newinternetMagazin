import React, { useState } from "react";
import "./styles.css";
import { Headers } from "./component/Header/Header";
import { Menu } from "./component/Menu/Menu";
import { BasketItem } from "./component/Basket/BasketItem";

export const Basket = () => {
  const [value, setValue] = useState(true);
  const onClickMenu = (e: boolean) => {
    setValue(e);
  };
  return (
    <div>
      <div>
        <div>
          <Headers value={value} setValue={onClickMenu} />
        </div>
        <BasketItem />
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "./styles.css";
import { Headers } from "./component/Header/Header";
import { Menu } from "./component/Menu/Menu";
import { useSelector } from "react-redux";
import { Product } from "./component/Product/Product";
export const Favorites = () => {
  const [value, setValue] = useState(true);
  const onClickMenu = (e: boolean) => {
    setValue(e);
  };
  let favorites = useSelector<any, any>(
    (state) => state.FavoritesToolkit.favorites
  );
  return (
    <div>
      <div>
        <div>
          <Headers value={value} setValue={onClickMenu} />
        </div>
        <div className="product">
          {favorites.map((e: any) => {
            return (
              <div key={e.id} className="grid">
                {" "}
                <Product e={e} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

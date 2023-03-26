import React from "react";
import { useSelector } from "react-redux";
import { Product } from "./Product";
export const Magazin = () => {
  let prod = useSelector<any, any>((state) => state.ProdSlice.prod);
  return (
    <div className="product">
      {prod.map((e: any) => (
        <div key={e.id} className="grid">
          {" "}
          <Product e={e} />{" "}
        </div>
      ))}
    </div>
  );
};

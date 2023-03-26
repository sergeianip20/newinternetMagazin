import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Form.module.css";
import Button from "@mui/material/Button";
export const SelectForm = () => {
  const [sel, setSel] = useState(true);
  let filterName = useSelector<any, any>((state) => state.NavReducer.name);
  return (
    <div>
      {sel ? (
        <div>
          <Button
            color="success"
            className={s.select}
            variant="contained"
            onClick={() => {
              setSel(false);
            }}
          >
            {" "}
            показать список{" "}
          </Button>
        </div>
      ) : (
        <div>
          <Button
            // className={s.select}
            onClick={() => {
              setSel(true);
            }}
          >
            Скрыть список
          </Button>
          {filterName.map((e: any) => {
            return <div key={e.id}>{e.name}</div>;
          })}{" "}
        </div>
      )}
    </div>
  );
};

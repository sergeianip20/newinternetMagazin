import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import s from "./Form.module.css";
import Button from "@mui/material/Button";
import { v1 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { CreateProd } from "../../state/Prod-reducer";
import { AddItemForm } from "./addItemForm";
import { ConstructionOutlined } from "@mui/icons-material";

import { SelectForm } from "./Select";

export const CreateForm = () => {
  let dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrise] = useState("");
  const [descrition, setDescrition] = useState("");
  const [filter, setFilter] = useState("");
  const newProd = () => {
    let prod = {
      id: v1(),
      name: name,
      price: price,
      descrition: descrition,
      filter: filter,
      live: false
    };
    dispatch(CreateProd(prod) as any);
    setName(" ");
    setPrise(" ");
    setDescrition(" ");
    setFilter(" ");
    // localStorage.setItem("item", JSON.stringify(prod));
  };
  return (
    <div className={s.border}>
      <div>
        <div>
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        </div>
        <div>
          <TextField
            value={price}
            onChange={(e) => {
              setPrise(e.currentTarget.value);
            }}
          />
        </div>
        <div>
          <TextField
            value={descrition}
            onChange={(e) => {
              setDescrition(e.currentTarget.value);
            }}
          />
        </div>
        <SelectForm />
        <Button
          variant="contained"
          onClick={() => {
            newProd();
          }}
        >
          {" "}
          Cоздать{" "}
        </Button>
      </div>
    </div>
  );
};

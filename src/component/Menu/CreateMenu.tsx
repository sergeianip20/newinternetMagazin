import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import { createMenu } from "../../state/NarReducerToolkit";
export const CreateMenu = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onClickCreate = () => {
    dispatch(createMenu(value));
  };
  return (
    <div>
      <TextField value={value} onChange={onChangeHandler} />
      <Button
        onClick={() => {
          onClickCreate();
        }}
      >
        {" "}
        создать
      </Button>
    </div>
  );
};

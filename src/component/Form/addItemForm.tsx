import React, {
  ChangeEvent,
  KeyboardEvent,
  useState,
  useCallback,
  HtmlHTMLAttributes
} from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { ControlPoint } from "@mui/icons-material";
type addItemPropsType = {
  addItem: (title: string) => void;
};
export const AddItemForm = (props: addItemPropsType) => {
  let [title, setTitle] = useState("");
  let [error, setError] = useState<string | null>(null);
  const additem = () => {
    if (title.trim() !== "") {
      props.addItem(title);
    } else {
      setError("title is required");
    }
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    props.addItem(e.currentTarget.value);
  };
  const activateViewMode = () => {
    props.addItem(title);
  };

  return (
    <div>
      <TextField
        value={title}
        onChange={onChangeHandler}
        autoFocus
        error={!!error}
        label="type value"
        helperText={error}
        onBlur={activateViewMode}
      />
    </div>
  );
};

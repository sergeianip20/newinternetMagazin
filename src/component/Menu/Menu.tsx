import React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";
import { deleteMenu } from "../../state/NarReducerToolkit";
export const Menu = () => {
  let dispatch = useDispatch();
  let prod = useSelector<any, any>((state) => state.navSlice.name);
  console.log(prod);
  return (
    <Paper>
      <MenuList sx={{ height: "100%" }}>
        {prod.map((e: any) => {
          return (
            <MenuItem>
              <IconButton>
                <AddBoxIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon
                  onClick={() => {
                    dispatch(deleteMenu(e.id));
                  }}
                />{" "}
              </IconButton>
              <ListItemText> {e.name} </ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
};

import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Toolbar } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import s from "./Header.module.css";
import { useDispatch } from "react-redux";
import { FilterNameAction, UpdateCA } from "../../state/Prod-reducer";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
type HeaderTypeProps = {
  setValue: (e: boolean) => void;
  value: boolean;
};

export const Headers = (props: HeaderTypeProps) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const filterValue = () => {
    dispatch(FilterNameAction(value));
  };
  const updateValue = () => {
    dispatch(UpdateCA());
  };

  return (
    <Box>
      <AppBar position="static">
        <div className={s.wrapper}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <MenuIcon
                onClick={() => {
                  props.setValue(!props.value);
                }}
              />
            </IconButton>{" "}
            <IconButton color="inherit">
              <NavLink to="/">
                <HomeIcon />{" "}
              </NavLink>
            </IconButton>
            <Typography
              color="white"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Постельное белье{" "}
            </Typography>
            <IconButton color="inherit">
              <SyncAltIcon
                onClick={() => {
                  updateValue();
                }}
              />
            </IconButton>
            <IconButton color="inherit">
              {" "}
              <SearchIcon
                onClick={() => {
                  filterValue();
                }}
              />{" "}
            </IconButton>
            <TextField
              label="Search.."
              variant="standard"
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
            />
            <IconButton color="inherit">
              <NavLink to="/favorites">
                <ThumbUpAltIcon />{" "}
              </NavLink>
            </IconButton>
            <IconButton edge="end" color="inherit">
              {" "}
              <NavLink to="/basket">
                <ShoppingBasketIcon />{" "}
              </NavLink>
            </IconButton>
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
};

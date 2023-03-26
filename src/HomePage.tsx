import React, { useState } from "react";
import "./styles.css";
import { Headers } from "./component/Header/Header";
import { Menu } from "./component/Menu/Menu";
import { Magazin } from "./component/Product/Magazin";
import { useSelector } from "react-redux";
export const HomePage = () => {
  const [value, setValue] = useState(true);
  const onClickMenu = (e: boolean) => {
    setValue(e);
  };

  return (
    <div>
      <div>
        <div>
          <Headers value={value} setValue={onClickMenu} />
          <div className="wrapper">
            <div className="menu">
              {value ? (
                <div>
                  {" "}
                  <Menu />{" "}
                </div>
              ) : (
                <div> </div>
              )}
            </div>
            <Magazin />
          </div>
        </div>
      </div>
    </div>
  );
};

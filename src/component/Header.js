import React from "react";
import ReorderSharpIcon from "@mui/icons-material/ReorderSharp";
import { IconButton,Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import '../component/Header.css'
import { useDispatch } from "react-redux";
import { logout } from "./store/authSlice";
const Header = () => {
  const dispatch=useDispatch()

  const logOutHandler=()=>{
    dispatch(logout())
  }
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderSharpIcon />
        </IconButton>
        <img src="/glogo.jpg" alt="logo"></img>
      </div>

      <div className="header__middle">
        <div className="search_mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search mail" />
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
      <IconButton>
            <HelpOutlineIcon/>
          </IconButton>

          <IconButton>
            <SettingsIcon/>
          </IconButton>

          <IconButton>
            <AppsIcon/>
          </IconButton>

          <Avatar onClick={logOutHandler}/>

      </div>
    </div>
  );
};

export default Header;

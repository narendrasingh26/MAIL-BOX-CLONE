import React from "react";
import "../component/EmailList.css";
import { IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const EmailListSetting = () => {
  return (
    <div className="emaillist__setting">
      <div className="emaillist__settingLeft">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="emaillist__settingRight">
        <p>1-50 of 2900</p>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>

      </div>
    </div>
  );
};

export default EmailListSetting;

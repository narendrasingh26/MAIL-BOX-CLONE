import React from "react";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import "../LeftBar/LeftBar.css";
import LeftBarOption from "./LeftBarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useDispatch, useSelector } from "react-redux";
import { openCompose } from "../store/mailSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { selectInboxCount } from "../store/mailSlice";

const LeftBar = () => {
  const dispatch = useDispatch();
  const inboxCount = useSelector(selectInboxCount);

  const composeOpenHandler = () => {
    dispatch(openCompose());
  };

  return (
    <div className="leftbar">
      <Button
        startIcon={<AddIcon />}
        className="compose__btn"
        onClick={composeOpenHandler}
      >
        Compose
      </Button>

      <Link to="inbox" className="leftBarOption">
        <LeftBarOption
          Icon={InboxIcon}
          title="Inbox"
          number={inboxCount}
          IsActive={true}
        />
      </Link>
      <LeftBarOption Icon={StarRateIcon} title="Starred" number="12" />
      <LeftBarOption Icon={WatchLaterIcon} title="Snoozed" number="32" />
      <LeftBarOption Icon={LabelImportantIcon} title="Important" number="98" />
      <Link to="/sentbox" className="leftBarOption">
        <LeftBarOption Icon={SendIcon} title="Sent" number={"0"} />
      </Link>
      <LeftBarOption Icon={DraftsIcon} title="Drafts" number="243" />
      <LeftBarOption Icon={LabelIcon} title="Category" number="33" />
      <LeftBarOption Icon={DeleteIcon} title="[Map]/Trash" number="54" />
      <LeftBarOption Icon={FindInPageIcon} title="Documents" number="65" />
      <LeftBarOption Icon={ExpandMoreIcon} title="More" number="76" />
      <hr />
      <h3 className="leftbaroptions__heading">Meet</h3>
      <LeftBarOption Icon={VideocamIcon} title="New Meeting" />
      <LeftBarOption Icon={KeyboardIcon} title="Join a Meeting" />
    </div>
  );
};

export default LeftBar;

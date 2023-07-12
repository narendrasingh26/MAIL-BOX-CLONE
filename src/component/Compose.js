import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import "../component/Compose.css";
import { useDispatch } from "react-redux";
import { closeCompose } from "./store/mailSlice";
// import { IconButton } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Compose = () => {
  const emailRegEx = localStorage.getItem("email");
  const sentMailUrl = `https://mail-box-2213a-default-rtdb.firebaseio.com/mailbox/sentmail/${emailRegEx}.json`;

  const dispatch = useDispatch();

  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  

  const closeHandler = () => {
    dispatch(closeCompose());
  };

  const sendMail = () => {
    let emailRegExw = recipient.replace(/[^a-zA-Z0-9 ]/g, "");
    const receivedMailUrl = `https://mail-box-2213a-default-rtdb.firebaseio.com/mailbox/recievemail/${emailRegExw}.json`;
    const sentMailPayload = {
      recipient,
      subject,
      message,
      sentTime: new Date().toISOString() ,
      id: uuidv4(),
      
    };

    const receivedMailPayload = {
      sender: emailRegEx,
      subject,
      message,
      sentTime:new Date().toISOString() ,
      id: uuidv4()
    };

    axios
      .post(sentMailUrl, sentMailPayload)
      .then((response) => {
        console.log("Sent mail data saved successfully!");
        alert('sent mail succsesfully')
        setRecipient("");
        setSubject("");
        setMessage("");
        
      })
      .catch((error) => {
        console.log("Error saving sent mail data:", error);
      });

    axios
      .post(receivedMailUrl, receivedMailPayload)
      .then((response) => {
        console.log("Received mail data saved successfully!");
      })
      .catch((error) => {
        console.log("Error saving received mail data:", error);
      });
     
  };

  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__headerLeft">
          <span>New Message</span>
        </div>
        <div className="compose__headerRight">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={closeHandler} />
        </div>
      </div>
      <div className="compose__body">
        <div className="compose__bodyForm">
          <input
            type="email"
            placeholder="Recipients"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            rows="20"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="compose__footer">
        <div className="compose__footerLeft">
          
            <button type="submit" onClick={sendMail}>
              Send
              <ArrowDropDownIcon />
            </button>
          
        </div>
        <div className="compose__footerRight">
          <FormatColorTextIcon />
          <AttachFileIcon />
          <LinkIcon />
          <InsertEmoticonIcon />
          <NoteAddIcon />
          <PhotoIcon />
          <PhonelinkLockIcon />
          <CreateIcon />
          <MoreVertIcon />
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default Compose;

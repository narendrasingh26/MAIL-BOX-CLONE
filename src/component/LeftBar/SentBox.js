import React, { useEffect, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import "../component/EmailList.css";
import "../EmailList.css";
import axios from "axios";

const SentBox = () => {
  const [emailData, setEmailData] = useState([]);

  useEffect(() => {
    const emailRegExw = localStorage.getItem("email");
    const sentMailUrl = `https://mail-box-2213a-default-rtdb.firebaseio.com/mailbox/sentmail/${emailRegExw}.json`;

    axios
      .get(sentMailUrl)
      .then((response) => {
        console.log(response.data, "response");
        const emailDataArray = Object.values(response.data);
        setEmailData(emailDataArray);
        console.log(emailDataArray);
      })
      .catch((error) => {
        console.log("Error retrieving email data:", error);
      });
  }, []);

  const handleDelete = (email) => {
    const emailRegExw = localStorage.getItem("email");
    const deleteUrl = `https://mail-box-2213a-default-rtdb.firebaseio.com/mailbox/sentmail/${emailRegExw}.json`;

    const filteredEmailData = emailData.filter(
      (item) =>
        item.sender !== email.sender ||
        item.subject !== email.subject ||
        item.message !== email.message
    );

    if (window.confirm("Are you sure you want to delete this message?")) {
      axios
        .put(deleteUrl, filteredEmailData)
        .then((response) => {
          console.log("Email deleted successfully!");

          setEmailData(filteredEmailData);
        })
        .catch((error) => {
          console.log("Error deleting email:", error);
        });
    }
  };

  return (
    <div className="">
      {emailData.map((email, index) => (
        <div key={index}>
          <div className="emailbody__left">
            {/* {!selectedEmails.includes(index) && <span className="blue-dot" />} */}
            <CheckBoxOutlineBlankIcon />
            <StarBorderIcon />
            <LabelOutlinedIcon />
            To
            <h4 style={{ marginLeft: "1rem" }}>{email.recipient}</h4>
            <b style={{ marginLeft: "1rem" }} className="emailsub">
              {email.subject}
            </b>
            <p
              className="emailbody__msg"
              style={{ marginLeft: "1rem" }}
              // onClick={() => handleEmailClick(index)}
            >
              {email.message}
            </p>
            <p
              style={{
                display: "inline-block",
                marginLeft: "-1rem",
                fontSize: "0.8",
                color: "gray",
                width: "8rem",
              }}
            >
              {/* {email.sentTime ? new Date(email.sentTime).toLocaleString() :''} */}
              {/* {email.sentTime ? new Date(email.sentTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ""} */}
              {email.sentTime
                ? new Date(email.sentTime).toLocaleString([], {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : ""}
            </p>
            <DeleteOutlineIcon onClick={() => handleDelete(email)} />
          </div>
          <div className="emailbody__middle">
            <div className="emailbody__middle__msg">
              <p></p>
            </div>
          </div>
          <div className="emailbody__right"></div>
        </div>
      ))}
    </div>
  );
};

export default SentBox;

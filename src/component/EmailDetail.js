import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";

const EmailDetail = () => {
  const [emailDetail, setEmailDetail] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchEmailDetail = async () => {
      try {
        const emailRegEx = localStorage.getItem("email");
        const emailDetailUrl = `https://mail-box-2213a-default-rtdb.firebaseio.com/mailbox/recievemail/${emailRegEx}.json`;
        const response = await axios.get(emailDetailUrl);

        const emailDataArray = Object.values(response.data);
        const selectedEmailDetail = emailDataArray.find(
          (email) => email.id === id
        );

        if (selectedEmailDetail) {
          setEmailDetail(selectedEmailDetail);
        } else {
          console.log("Email not found");
        }
      } catch (error) {
        console.log("Error retrieving email detail:", error);
      }
    };

    fetchEmailDetail();
  }, [id]);

  const handleBackClick = () => {
    history.goBack();
  };

  if (!emailDetail) {
    return null;
  }

  return (
    <div>
      <div>
        <ArrowBackIcon
          onClick={handleBackClick}
          style={{ cursor: "pointer" }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <p
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              borderBottom: "2px solid black",
              display: "inline-block",
            }}
          >
            from-
          </p>
          <h4 style={{ marginLeft: "8px" }}>{emailDetail.sender}</h4>
        </div>
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            borderBottom: "2px solid black",
            display: "inline-block",
          }}
        >
          subject-
        </p>
        <p>{emailDetail.subject}</p>
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            borderBottom: "2px solid black",
            display: "inline-block",
          }}
        >
          message-
        </p>{" "}
        <p>{emailDetail.message}</p>
      </div>
    </div>
  );
};

export default EmailDetail;

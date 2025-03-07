import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/dist/client/link";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

const BottomBar = ({
  whatsappShow,
  masterdegree,
  dataScienceCounselling,
  interstedInHide,
  radio,
  dataScienceGeneric,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className="divWrapper">
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form
            popup={true}
            setTrigger={setPopups}
            dataScienceCounselling={dataScienceCounselling}
            interstedInHide={interstedInHide}
            radio={radio}
            dataScienceGeneric={dataScienceGeneric}
          />
        </div>
      </Popup>
      {masterdegree ? (
        <div className="flDivLeft" onClick={popupShow}>
          Start Your Application
          <FaArrowRight style={{ color: "#fff" }} className="bIcon" />
        </div>
      ) : (
        <div className="flDivLeft" onClick={popupShow}>
          Apply For Counselling
          <FaArrowRight style={{ color: "#fff" }} className="bIcon" />
        </div>
      )}

      {whatsappShow ? (
        <div className="flDivRight">
          <Link href="https://wa.me/+917349222263">Chat with us </Link>
          <IoLogoWhatsapp className="bIcon" style={{ color: "Green" }} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BottomBar;

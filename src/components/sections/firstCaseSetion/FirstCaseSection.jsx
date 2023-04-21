import React from "react";

import CustomModalButton from "../../CustomModalButton";
import FirstCaseModalBody from "./FirstCaseModalBody";

import "../../../styles.css";

const FirstCaseSection = (props) => {
  const renderHeading = () => {
    return (
      <h3 style={{ marginBottom: "20px" }}>
        Full Page Modal (Case 1)
      </h3>
    );
  };

  const renderModalButton = () => {
    return (
      <CustomModalButton 
        buttonText='Show Modal'
        className="first-case-modal"
        dialogClassName="first-case-modal-dialog"
      >
        <FirstCaseModalBody />
      </CustomModalButton>
    );
  };

  return (
    <div className="case-container">
      {renderHeading()}
      {renderModalButton()}
    </div>
  );
};

export default FirstCaseSection;

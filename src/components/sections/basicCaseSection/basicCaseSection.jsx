import React from "react";

import CustomModalButton from "../../CustomModalButton";
import BasicCaseModalBody from "./basicCaseModalBody";

const BasicCaseSection = (props) => {
  const renderHeading = () => {
    return (
      <h3 style={{ marginBottom: "20px" }}>
        Basic Case
      </h3>
    );
  };

  const renderModalButton = () => {
    return (
      <CustomModalButton 
        buttonText='Show Modal'
      >
        <BasicCaseModalBody />
      </CustomModalButton>
    );
  };

  return (
  <div className="case-container">
    {renderHeading()}
    {renderModalButton()}
  </div>
)};

export default BasicCaseSection;

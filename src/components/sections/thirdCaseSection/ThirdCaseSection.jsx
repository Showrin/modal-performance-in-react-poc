import React from "react";

import CustomModalButton from "../../CustomModalButton";
import ThirdCaseLeftModalBody from './ThirdCaseLeftModalBody'
import ThirdCaseRightModalBody from './ThirdCaseRightModalBody'

const ThirdCaseSection = (props) => {
  const renderHeading = () => {
    return (
      <h3 style={{ marginBottom: "20px" }}>
        Focusable stacked Modal (Case 3)
      </h3>
    );
  };

  const renderLeftModalButton = () => {
    return (
      <CustomModalButton
        buttonText='Left Mdoal'
        className="third-case-left-modal"
        focusable={true} 
      >
        <ThirdCaseLeftModalBody />
      </CustomModalButton>
    );
  };

  const renderRightModalButton = () => {
    return (
      <CustomModalButton
        buttonText='Right Mdoal'
        className="third-case-right-modal"
        focusable={true} 
      >
        <ThirdCaseRightModalBody />
      </CustomModalButton>
    );
  };

  const renderModalButtons = () => {
    return (
      <div className="second-case">
        {renderLeftModalButton()}
        {renderRightModalButton()}
      </div>
    );
  };

  return (
  <div className="case-container">
    {renderHeading()}
    {renderModalButtons()}
  </div>
)};

export default ThirdCaseSection;

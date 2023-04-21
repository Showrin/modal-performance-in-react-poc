import React from "react";

import CustomModalButton from "../../CustomModalButton";
import SecondCaseLeftModalBody from './SecondCaseLeftModalBody';
import SecondCaseRightModalBody from './SecondCaseRightModalBody';

const SecondCaseSection = (props) => {
  const renderHeading = () => {
    return (
      <h3 style={{ marginBottom: "20px" }}>
        Left and Right Modal (Case 2)
      </h3>
    );
  };

  const renderLeftModal = () => {
    return (
      <CustomModalButton 
        buttonText='Left Modal'
        dialogClassName="second-case-left-modal"
      >
        <SecondCaseLeftModalBody />
      </CustomModalButton>
    );
  };

  const renderRightModal = () => {
    return (
      <CustomModalButton 
        buttonText='Left Modal'
        dialogClassName="second-case-right-modal"
      >
        <SecondCaseRightModalBody />
      </CustomModalButton>
    );
  };

  const renderModalButtons = () => {
    return (
      <div className="second-case">
        {renderLeftModal()}
        {renderRightModal()}        
      </div>
    );
  };

  return (
    <div className="case-container">
      {renderHeading()}
      {renderModalButtons()}
    </div>
  );
};

export default SecondCaseSection;

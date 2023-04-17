import React, { useState, Fragment } from "react";
import { Button } from "react-bootstrap";
import ThirdCaseRightModal from "./ThirdCaseRightModal";

const ThirdCaseRightButtonSection = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const onClickModal = () => {
    setShouldShowModal(true);
  };

  const handleModalClose = () => {
    setShouldShowModal(false);
  };

  return (
    <Fragment>
      <Button onClick={onClickModal}>Right Modal</Button>
      <ThirdCaseRightModal
        shouldShowModal={shouldShowModal}
        handleModalClose={handleModalClose}
      />
    </Fragment>
  );
};

export default ThirdCaseRightButtonSection;

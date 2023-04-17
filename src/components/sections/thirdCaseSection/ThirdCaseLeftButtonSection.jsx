import React, { useState, Fragment } from "react";
import { Button } from "react-bootstrap";

import ThirdCaseLeftModal from "./ThirdCaseLeftModal";

const ThirdCaseLeftButtonSection = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const onClickModal = () => {
    setShouldShowModal(true);
  };

  const handleModalClose = () => {
    setShouldShowModal(false);
  };

  return (
    <Fragment>
      <Button onClick={onClickModal}>Left Modal</Button>
      <ThirdCaseLeftModal
        shouldShowModal={shouldShowModal}
        handleModalClose={handleModalClose}
      />
    </Fragment>
  );
};

export default ThirdCaseLeftButtonSection;

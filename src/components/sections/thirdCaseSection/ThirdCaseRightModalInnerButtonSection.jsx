import React, { useState, Fragment } from "react";
import { Button } from "react-bootstrap";

import ThirdCaseInnerModal from "./ThirdCaseInnerModal";

const ThirdCaseRightModalInnerButtonSection = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const onClickShowModal = () => {
    setShouldShowModal(true);
  };

  const handleModalClose = () => {
    setShouldShowModal(false);
  };

  return (
    <Fragment>
      <Button onClick={onClickShowModal} style={{ marginBottom: "20px" }}>
        Right Modal
      </Button>
      <ThirdCaseInnerModal
        shouldShowModal={shouldShowModal}
        handleModalClose={handleModalClose}
      />
    </Fragment>
  );
};

export default ThirdCaseRightModalInnerButtonSection;

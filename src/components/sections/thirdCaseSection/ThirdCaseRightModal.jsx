import React, { useContext } from "react";

import CustomModal from "../../CustomModal";
import { AppContext } from "../../../App";
import ThirdCaseRightModalBody from "./ThirdCaseRightModalBody";

const ThirdCaseRightModal = (props) => {
  const { shouldShowModal, handleModalClose } = props;
  const { shouldDestroyOnClose } = useContext(AppContext);

  return (
    <CustomModal
      className="third-case-right-modal"
      shouldShow={shouldShowModal}
      handleClose={handleModalClose}
      shouldDestroyOnClose={shouldDestroyOnClose}
      focusable={true}
    >
      <ThirdCaseRightModalBody />
    </CustomModal>
  );
};

export default ThirdCaseRightModal;

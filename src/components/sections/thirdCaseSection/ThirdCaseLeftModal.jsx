import React, { useContext } from "react";

import CustomModal from "../../CustomModal";
import { AppContext } from "../../../App";
import ThirdCaseLeftModalBody from "./ThirdCaseLeftModalBody";

const ThirdCaseLeftModal = (props) => {
  const { shouldShowModal, handleModalClose } = props;
  const { shouldDestroyOnClose } = useContext(AppContext);

  return (
    <CustomModal
      className="third-case-left-modal"
      shouldShow={shouldShowModal}
      handleClose={handleModalClose}
      shouldDestroyOnClose={shouldDestroyOnClose}
      focusable={true}
    >
      <ThirdCaseLeftModalBody />
    </CustomModal>
  );
};

export default ThirdCaseLeftModal;

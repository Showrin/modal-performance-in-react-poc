import React, { useContext } from "react";

import CustomModal from "../../CustomModal";
import { AppContext } from "../../../App";
import ThirdCaseInnerModalBody from "./ThirdCaseInnerModalBody";

const ThirdCaseInnerModal = (props) => {
  const { handleModalClose, shouldShowModal } = props;
  const { shouldDestroyOnClose } = useContext(AppContext);

  return (
    <CustomModal
      className="third-case-right-modal"
      shouldShow={shouldShowModal}
      handleClose={handleModalClose}
      shouldDestroyOnClose={shouldDestroyOnClose}
      focusable={false}
    >
      <ThirdCaseInnerModalBody />
    </CustomModal>
  );
};

export default ThirdCaseInnerModal;

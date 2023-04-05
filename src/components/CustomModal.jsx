import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import classNames from "classnames";

const CustomModal = (props) => {
  const { shouldShow, handleClose, shouldDestroyOnClose, children, dialogClassName } = props;
  const [shouldOpen, setShouldOpen] = useState(false);

  useEffect(() => {
    if (shouldShow && !shouldOpen) {
      setShouldOpen(true);
    }

    if (!shouldShow && shouldDestroyOnClose) {
      setShouldOpen(false);
    }

    if (!shouldDestroyOnClose) {
      if (shouldShow) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "17px";
        document.body.classList.add("modal-open");
      } else {
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = 0;
        document.body.classList.remove("modal-open");
      }
    }
  }, [shouldOpen, shouldShow, shouldDestroyOnClose]);

  return (
    <Modal
      className={classNames("test-modal", {
        "test-modal--hide": !shouldShow,
      })}
      backdropClassName={classNames("test-modal__backdrop", {
        "test-modal__backdrop--hide": !shouldShow,
      })}
      dialogClassName={dialogClassName}
      show={shouldOpen}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

CustomModal.defaultProps = {
  shouldDestroyOnClose: false,
};

export default CustomModal;

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Modal, Button } from "react-bootstrap";
import classNames from "classnames";
import useModalManager from "../managers/ModalManger";

const CustomModal = (props) => {
  const {
    shouldShow,
    handleClose,
    shouldDestroyOnClose,
    children,
    className,
    dialogClassName,
    focusable,
  } = props;
  const [shouldOpen, setShouldOpen] = useState(false);
  const { id, setIsVisibleByCss, zIndex, bringModalToTop } = useModalManager();

  const modalClassName = useMemo(
    () =>
      classNames(
        "test-modal",
        {
          "test-modal--hide": !shouldShow,
          "test-modal--focusable": focusable,
        },
        className
      ),
    [shouldShow, focusable, className]
  );

  const modalBackdropClassName = useMemo(
    () =>
      classNames("test-modal__backdrop", {
        "test-modal__backdrop--hide": !shouldShow,
      }),
    [shouldShow]
  );

  const modalDialogClassName = useMemo(
    () =>
      classNames(
        "test-modal__dialog",
        {
          "test-modal__dialog--focusable": focusable,
        },
        dialogClassName
      ),
    [focusable, dialogClassName]
  );

  const onRenderModal = useCallback(() => {
    document.getElementById(id).setAttribute("tabindex", "none");

    if (focusable) {
      document.getElementById(id).addEventListener("click", bringModalToTop);
    }
  }, [id, focusable, bringModalToTop]);

  useEffect(() => {
    if (shouldShow && !shouldOpen) {
      setShouldOpen(true);
    }

    if (!shouldShow && shouldDestroyOnClose) {
      setShouldOpen(false);
    }
  }, [shouldOpen, shouldShow, shouldDestroyOnClose]);

  useEffect(() => {
    setIsVisibleByCss(shouldShow);
  }, [shouldShow, setIsVisibleByCss]);

  return (
    <Modal
      id={id}
      className={modalClassName}
      backdropClassName={modalBackdropClassName}
      dialogClassName={modalDialogClassName}
      backdrop={!focusable}
      backdropStyle={{ zIndex }}
      show={shouldOpen}
      onHide={handleClose}
      onEntered={onRenderModal}
      style={{ zIndex }}
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

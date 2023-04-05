import React from "react";
import { useState } from "react";
import { Button, Checkbox } from "react-bootstrap";
import ModalBody from "./components/ModalBody";
import CustomModal from "./components/CustomModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import FirstCaseModalBody1 from "./components/FistCaseModalBody/FirstCaseModalBody1";
import SecondCaseLeftModalBody from "./components/SecondCaseModalBody/SecondCaseLeftModalBody";
import SecondCaseRightModalBody from "./components/SecondCaseModalBody/SecondCaseRightModalBody";
import ThirdCaseLeftModalBody from "./components/ThirdCaseModalBody/ThirdCaseLeftModalBody";
import ThirdCaseRightModalBody from "./components/ThirdCaseModalBody/ThirdCaseRightModalBody";

export default function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [shouldDestroyOnClose, setShouldDestroyOnClose] = useState(true);

  const [shouldShowFirstCaseModal, setShouldShowFirstCaseModal] =
    useState(false);

  const [shouldShowSecondCaseLeftModal, setShouldShowSecondCaseLeftModal] =
    useState(false);
  const [shouldShowSecondCaseRightModal, setShouldShowSecondCaseRightModal] =
    useState(false);

  const [shouldShowThirdCaseLeftModal, setShouldShowThirdCaseLeftModal] =
    useState(false);
  const [shouldShowThirdCaseRightModal, setShouldShowThirdCaseRightModal] =
    useState(false);

  const onClickShowModalButton = () => {
    setShouldShowModal(true);
  };

  const handleModalClose = () => {
    setShouldShowModal(false);
  };

  // First case modal
  const onClickFirstCaseShowModal = () => {
    setShouldShowFirstCaseModal(true);
  };

  const handleFirstCaseModalClose = () => {
    setShouldShowFirstCaseModal(false);
  };

  // Second case left modal
  const onClickSecondCaseShowLeftModal = () => {
    setShouldShowSecondCaseLeftModal(true);
  };

  const handleSecondCaseLeftModalClose = () => {
    setShouldShowSecondCaseLeftModal(false);
  };

  // Second case right modal
  const onClickSecondCaseShowRightModal = () => {
    setShouldShowSecondCaseRightModal(true);
  };

  const handleSecondCaseRightModalClose = () => {
    setShouldShowSecondCaseRightModal(false);
  };

  // Third case left modal
  const onClickThirdCaseShowLeftModal = () => {
    setShouldShowThirdCaseLeftModal(true);
  };

  const handleThirdCaseLeftModalClose = () => {
    setShouldShowThirdCaseLeftModal(false);
  };

  // Third case right modal
  const onClickThirdCaseShowRightModal = () => {
    setShouldShowThirdCaseRightModal(true);
  };

  const handleThirdCaseRightModalClose = () => {
    setShouldShowThirdCaseRightModal(false);
  };

  return (
    <div className="App">
      <h1>Modal Performance R&D</h1>

      <div>
        shouldDestroyOnClose?
        <Checkbox
          checked={shouldDestroyOnClose}
          onChange={() => setShouldDestroyOnClose((prevState) => !prevState)}
        />
      </div>

      {/* First case */}
      <div className="case-container">
        <div style={{ marginBottom: "20px" }}>First Case</div>

        <Button onClick={onClickFirstCaseShowModal}>Show Modal</Button>
      </div>

      {/* Second case */}
      <div className="case-container">
        <div style={{ marginBottom: "20px" }}>Second Case</div>

        <div className="second-case">
          <Button onClick={onClickSecondCaseShowLeftModal}>Left Modal</Button>
          <Button onClick={onClickSecondCaseShowRightModal}>Right Modal</Button>
        </div>
      </div>

      {/* Third case */}
      <div className="case-container">
        <div style={{ marginBottom: "20px" }}>Third Case</div>

        <div className="second-case">
          <Button onClick={onClickThirdCaseShowLeftModal}>Left Modal</Button>
          <Button onClick={onClickThirdCaseShowRightModal}>Right Modal</Button>
        </div>
      </div>

      <Button onClick={onClickShowModalButton}>Show Modal</Button>

      <CustomModal
        shouldShow={shouldShowModal}
        handleClose={handleModalClose}
        shouldDestroyOnClose={shouldDestroyOnClose}
      >
        <ModalBody />
      </CustomModal>

      {/* First case modal */}
      <CustomModal
        shouldShow={shouldShowFirstCaseModal}
        handleClose={handleFirstCaseModalClose}
        dialogClassName="first-case-modal-1"
      >
        <FirstCaseModalBody1 />
      </CustomModal>

      {/* Second case left modal */}
      <CustomModal
        shouldShow={shouldShowSecondCaseLeftModal}
        handleClose={handleSecondCaseLeftModalClose}
        dialogClassName="second-case-left-modal"
      >
        <SecondCaseLeftModalBody />
      </CustomModal>

      {/* Second case right modal */}
      <CustomModal
        shouldShow={shouldShowSecondCaseRightModal}
        handleClose={handleSecondCaseRightModalClose}
        dialogClassName="second-case-right-modal"
      >
        <SecondCaseRightModalBody />
      </CustomModal>

      {/* Third case left modal */}
      <CustomModal
        shouldShow={shouldShowThirdCaseLeftModal}
        handleClose={handleThirdCaseLeftModalClose}
        dialogClassName="third-case-left-modal"
      >
        <ThirdCaseLeftModalBody />
      </CustomModal>

      {/* Third case right modal */}
      <CustomModal
        shouldShow={shouldShowThirdCaseRightModal}
        handleClose={handleThirdCaseRightModalClose}
        dialogClassName="third-case-right-modal"
      >
        <ThirdCaseRightModalBody />
      </CustomModal>
    </div>
  );
}

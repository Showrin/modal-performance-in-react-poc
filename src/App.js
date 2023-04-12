import React from "react";
import { useState, createContext } from "react";
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

export const AppContext = createContext();

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
    <AppContext.Provider value={{ shouldDestroyOnClose }}>
      <div className="App">
        <h1 style={{ marginBottom: "40px" }}>Modal Performance R&D</h1>
        <div style={{ marginBottom: "20px" }}>
          <h4>shouldDestroyOnClose?</h4>
          <Checkbox
            checked={shouldDestroyOnClose}
            onChange={() => setShouldDestroyOnClose((prevState) => !prevState)}
          />
        </div>
        <div className="case-container">
          <h3 style={{ marginBottom: "20px" }}>Basic modal (Case 1)</h3>
          <Button onClick={onClickShowModalButton}>Show Modal</Button>
        </div>
        {/* First case */}
        <div className="case-container">
          <h3 style={{ marginBottom: "20px" }}>Full Page Modal (Case 2)</h3>

          <Button onClick={onClickFirstCaseShowModal}>Show Modal</Button>
        </div>
        {/* Second case */}
        <div className="case-container">
          <h3 style={{ marginBottom: "20px" }}>
            Left and Right Modal (Case 3)
          </h3>

          <div className="second-case">
            <Button onClick={onClickSecondCaseShowLeftModal}>Left Modal</Button>
            <Button onClick={onClickSecondCaseShowRightModal}>
              Right Modal
            </Button>
          </div>
        </div>
        {/* Third case */}
        <div className="case-container">
          <h3 style={{ marginBottom: "20px" }}>
            Focusable stacked Modal (Case 4)
          </h3>

          <div className="second-case">
            <Button onClick={onClickThirdCaseShowLeftModal}>Left Modal</Button>
            <Button onClick={onClickThirdCaseShowRightModal}>
              Right Modal
            </Button>
          </div>
        </div>
        <CustomModal
          shouldShow={shouldShowModal}
          handleClose={handleModalClose}
          shouldDestroyOnClose={shouldDestroyOnClose}
        >
          <ModalBody />
        </CustomModal>
        {/* First case modal */}
        <CustomModal
          className="first-case-modal"
          dialogClassName="first-case-modal__dialog"
          shouldShow={shouldShowFirstCaseModal}
          handleClose={handleFirstCaseModalClose}
          shouldDestroyOnClose={shouldDestroyOnClose}
        >
          <FirstCaseModalBody1 />
        </CustomModal>
        <CustomModal
          shouldShow={shouldShowSecondCaseLeftModal}
          handleClose={handleSecondCaseLeftModalClose}
          shouldDestroyOnClose={shouldDestroyOnClose}
          dialogClassName="second-case-left-modal"
        >
          <SecondCaseLeftModalBody />
        </CustomModal>
        {/* Second case right modal */}
        <CustomModal
          shouldShow={shouldShowSecondCaseRightModal}
          handleClose={handleSecondCaseRightModalClose}
          shouldDestroyOnClose={shouldDestroyOnClose}
          dialogClassName="second-case-right-modal"
        >
          <SecondCaseRightModalBody />
        </CustomModal>
        {/* Third case left modal */}
        <CustomModal
          className="third-case-left-modal"
          shouldShow={shouldShowThirdCaseLeftModal}
          handleClose={handleThirdCaseLeftModalClose}
          shouldDestroyOnClose={shouldDestroyOnClose}
          focusable={true}
        >
          <ThirdCaseLeftModalBody />
        </CustomModal>
        {/* Third case right modal */}
        <CustomModal
          className="third-case-right-modal"
          shouldShow={shouldShowThirdCaseRightModal}
          handleClose={handleThirdCaseRightModalClose}
          shouldDestroyOnClose={shouldDestroyOnClose}
          focusable={true}
        >
          <ThirdCaseRightModalBody />
        </CustomModal>
      </div>
    </AppContext.Provider>
  );
}

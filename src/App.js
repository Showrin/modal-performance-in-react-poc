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
import ThirdCaseSection from "./components/sections/thirdCaseSection/ThirdCaseSection";

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
          <h3 style={{ marginBottom: "20px" }}>Basic modal (Basic case)</h3>
          <Button onClick={onClickShowModalButton}>Show Modal</Button>
        </div>
        {/* First case */}
        <div className="case-container">
          <h3 style={{ marginBottom: "20px" }}>Full Page Modal (Case 1)</h3>

          <Button onClick={onClickFirstCaseShowModal}>Show Modal</Button>
        </div>
        {/* Second case */}
        <div className="case-container">
          <h3 style={{ marginBottom: "20px" }}>
            Left and Right Modal (Case 2)
          </h3>

          <div className="second-case">
            <Button onClick={onClickSecondCaseShowLeftModal}>Left Modal</Button>
            <Button onClick={onClickSecondCaseShowRightModal}>
              Right Modal
            </Button>
          </div>
        </div>
        {/* Third case */}
        {/* <ThirdCaseSection /> */}
        <ThirdCaseSection />

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
      </div>
    </AppContext.Provider>
  );
}

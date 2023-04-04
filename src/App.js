import React from "react";
import { useState } from "react";
import { Button, Checkbox } from "react-bootstrap";
import ModalBody from "./components/ModalBody";
import CustomModal from "./components/CustomModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [shouldDestroyOnClose, setShouldDestroyOnClose] = useState(true);

  const onClickShowModalButton = () => {
    setShouldShowModal(true);
  };

  const handleModalClose = () => {
    setShouldShowModal(false);
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

      <div className="first-case">First Case</div>

      <Button onClick={onClickShowModalButton}>Show Modal</Button>

      <CustomModal
        shouldShow={shouldShowModal}
        handleClose={handleModalClose}
        shouldDestroyOnClose={shouldDestroyOnClose}
      >
        <ModalBody />
      </CustomModal>
    </div>
  );
}

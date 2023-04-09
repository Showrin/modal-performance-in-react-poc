import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormControl, FormGroup } from "react-bootstrap";
import CustomModal from "../CustomModal";
import FirstCaseModalBody1LeftModal from "./FirstCaseModal1LeftModal";
import FirstCaseModalBody1RightModal from "./FirstCaseModal1RightModal";

export default function FirstCaseModalBody1() {
  const [photos, setPhotos] = useState([]);
  const [demoText, setDemoText] = useState("");
  const [
    shouldShowFirstCaseModal1LeftModal,
    setShouldShowFirstCaseModal1LeftModal,
  ] = useState(false);
  const [
    shouldShowFirstCaseModal1RightModal,
    setShouldShowFirstCaseModal1RightModal,
  ] = useState(false);

  const fetchPhotos = async () => {
    const url = `https://api.pexels.com/v1/search?query=nature&per_page=500`;
    const response = await axios.get(url, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    });

    setPhotos(response.data.photos);
  };

  const onClickFirstCaseShowModal1LeftModal = () => {
    setShouldShowFirstCaseModal1LeftModal(true);
  };

  const handleFirstCaseModal1LeftModalClose = () => {
    setShouldShowFirstCaseModal1LeftModal(false);
  };

  const onClickFirstCaseShowModal1RightModal = () => {
    setShouldShowFirstCaseModal1RightModal(true);
  };

  const handleFirstCaseModal1RightModalClose = () => {
    setShouldShowFirstCaseModal1RightModal(false);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="test-modal__body first-case-modal-body-1">
      <div className="first-case">
        <Button onClick={onClickFirstCaseShowModal1LeftModal}>
          Left Modal
        </Button>
        <Button onClick={onClickFirstCaseShowModal1RightModal}>
          Right Modal
        </Button>
      </div>

      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={demoText}
            placeholder="Enter text"
            onChange={(e) => {
              setDemoText(e.target.value);
            }}
          />
        </FormGroup>
      </form>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.src.small} alt={photo.alt} />
      ))}

      {/* Left modal */}
      <CustomModal
        shouldShow={shouldShowFirstCaseModal1LeftModal}
        handleClose={handleFirstCaseModal1LeftModalClose}
        dialogClassName="first-case-modal-body-1-left-modal"
      >
        <FirstCaseModalBody1LeftModal />
      </CustomModal>

      {/* Right modal */}
      <CustomModal
        shouldShow={shouldShowFirstCaseModal1RightModal}
        handleClose={handleFirstCaseModal1RightModalClose}
        dialogClassName="first-case-modal-body-1-right-modal"
      >
        <FirstCaseModalBody1RightModal />
      </CustomModal>
    </div>
  );
}

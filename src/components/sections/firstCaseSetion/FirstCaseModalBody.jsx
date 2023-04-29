import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, FormGroup } from "react-bootstrap";

import FirstCaseModalBody1LeftModal from "./FirstCaseInnerLeftModal";
import FirstCaseModalBody1RightModal from "./FirstCaseInnerRightModal";
import CustomModalButton from "../../CustomModalButton";

export default function FirstCaseModalBody() {
  const [photos, setPhotos] = useState([]);
  const [demoText, setDemoText] = useState("");

  const fetchPhotos = async () => {
    const url = `https://api.pexels.com/v1/search?query=nature&per_page=500`;
    const response = await axios.get(url, {
      headers: {
        Authorization: process.env.REACT_APP_PEXELS_API_KEY,
      },
    });

    setPhotos(response.data.photos);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const renderLeftModalButton = () => {
    return (
      <CustomModalButton 
        buttonText='Left Modal'
        dialogClassName="first-case-modal-body-1-left-modal"
      >
        <FirstCaseModalBody1LeftModal />
      </CustomModalButton>
    );
  };

  const renderRightModalButton = () => {
    return (
      <CustomModalButton 
        buttonText='Right Modal'
        dialogClassName="first-case-modal-body-1-right-modal"
      >
        <FirstCaseModalBody1RightModal />
      </CustomModalButton>
    );
  };

  const renderModalButtons = () => {
    return (
      <div className="first-case">
        {renderLeftModalButton()}
        {renderRightModalButton()}
      </div>
    );
  };

  return (
    <div className="test-modal__body first-case-modal-body-1">
      {renderModalButtons()}

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
    </div>
  );
}

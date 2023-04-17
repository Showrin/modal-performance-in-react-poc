import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, FormGroup, Button } from "react-bootstrap";

import CustomModal from "../../CustomModal";
import ThirdCaseRightModalInnerButtonSection from "./ThirdCaseRightModalInnerButtonSection";

const ThirdCaseRightButtonSection = (props) => {
  const { shouldDestroyOnClose } = props;
  const [photos, setPhotos] = useState([]);
  const [demoText, setDemoText] = useState("");
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const onClickModal = () => {
    setShouldShowModal(true);
  };

  const handleModalClose = () => {
    setShouldShowModal(false);
  };

  const fetchPhotos = async () => {
    const url = `https://api.pexels.com/v1/search?query=nature&per_page=500`;
    const response = await axios.get(url, {
      headers: {
        Authorization: process.env.REACT_APP_PEXELS_API_KEY,
      },
    });

    setPhotos(response.data.photos);
  };

  const renderModalBody = () => {
    return (
      <div className="test-modal__body">
        <ThirdCaseRightModalInnerButtonSection />
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
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <Button onClick={onClickModal}>Right Modal</Button>

      <CustomModal
        className="third-case-right-modal"
        shouldShow={shouldShowModal}
        handleClose={handleModalClose}
        shouldDestroyOnClose={shouldDestroyOnClose}
        focusable={true}
      >
        {renderModalBody()}
      </CustomModal>
    </div>
  );
};

export default ThirdCaseRightButtonSection;

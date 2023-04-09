import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, FormGroup } from "react-bootstrap";

const API_KEY = "4gxAGT6PNHuKayzNv2WujZ3jQ606ZjRJZaV6eUAoEqadR6bj2cYGeyQR";

export default function FirstCaseModalBody2() {
  const [photos, setPhotos] = useState([]);
  const [demoText, setDemoText] = useState("");

  const fetchPhotos = async () => {
    const url = `https://api.pexels.com/v1/search?query=nature&per_page=500`;
    const response = await axios.get(url, {
      headers: {
        Authorization: API_KEY,
      },
    });

    setPhotos(response.data.photos);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="test-modal__body">
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

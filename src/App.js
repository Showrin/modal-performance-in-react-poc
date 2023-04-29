import React, { useState, createContext } from "react";
import { Checkbox } from "react-bootstrap";

import FirstCaseSection from "./components/sections/firstCaseSetion/FirstCaseSection";
import SecondCaseSection from "./components/sections/secondCaseSection/SecondCaseSection";
import ThirdCaseSection from "./components/sections/thirdCaseSection/ThirdCaseSection";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicCaseSection from "./components/sections/basicCaseSection/basicCaseSection";

export const AppContext = createContext();

export default function App() {
  const [shouldDestroyOnClose, setShouldDestroyOnClose] = useState(true);

  const renderHeading = () => {
    return <h1 style={{ marginBottom: "40px" }}>Modal Performance R&D</h1>;
  };

  const renderDestroyCheckBox = () => {
    return (
      <div style={{ marginBottom: "20px" }}>
        <h4>shouldDestroyOnClose?</h4>
        <Checkbox
          checked={shouldDestroyOnClose}
          onChange={() => setShouldDestroyOnClose((prevState) => !prevState)}
        />
      </div>
    );
  };

  return (
    <AppContext.Provider value={{ shouldDestroyOnClose }}>
      <div className="App">
        {renderHeading()}
        {renderDestroyCheckBox()}

        <BasicCaseSection />
        <FirstCaseSection />
        <SecondCaseSection />
        <ThirdCaseSection />
      </div>
    </AppContext.Provider>
  );
}

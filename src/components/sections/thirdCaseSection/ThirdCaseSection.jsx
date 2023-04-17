import React from "react";

import ThirdCaseLeftButtonSection from "./ThirdCaseLeftButtonSection";
import ThirdCaseRightButtonSection from "./ThirdCaseRightButtonSection";

const ThirdCaseSection = () => (
  <div className="case-container">
    <h3 style={{ marginBottom: "20px" }}>Focusable stacked Modal (Case 3)</h3>
    <div className="second-case">
      <ThirdCaseLeftButtonSection />
      <ThirdCaseRightButtonSection />
    </div>
  </div>
);

export default ThirdCaseSection;

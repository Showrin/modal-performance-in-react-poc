import React from "react";

import ThirdCaseLeftButtonSection from "./ThirdCaseLeftButtonSection";
import ThirdCaseRightButtonSection from "./ThirdCaseRightButtonSection";

const ThirdCaseSection = (props) => {
  const { shouldDestroyOnClose } = props;

  // Third case left modal

  // Third case right modal

  return (
    <div className="case-container">
      <h3 style={{ marginBottom: "20px" }}>Focusable stacked Modal (Case 3)</h3>

      <div className="second-case">
        <ThirdCaseLeftButtonSection
          shouldDestroyOnClose={shouldDestroyOnClose}
        />
        <ThirdCaseRightButtonSection
          shouldDestroyOnClose={shouldDestroyOnClose}
        />
      </div>

      {/* Third case left modal */}

      {/* Third case right modal */}
    </div>
  );
};

export default ThirdCaseSection;

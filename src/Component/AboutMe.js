import React, { useState } from "react";
import Introduce from "./AboutMe/Introduce";
import Resume from "./AboutMe/Resume";
import "../css/AboutMe.css";

export default function AboutMe() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="about-me-container">
      {showResume ? (
        <div className="resume-wrapper fade-in">
          <button className="button-style" onClick={() => setShowResume(false)}>
            ⬅️ 뒤로가기 (자기소개)
          </button>
          <Resume />
        </div>
      ) : (
        <Introduce onNext={() => setShowResume(true)} />
      )}
    </div>
  );
}

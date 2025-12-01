import React, { useState } from "react";
import Introduce from "./AboutMe/Introduce";
import Resume from "./AboutMe/Resume";  

export default function AboutMe() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="about-me-container">
      {showResume ? (
        <div className="resume-wrapper fade-in">
          <button 
            onClick={() => setShowResume(false)}
            style={{ 
              marginBottom: '20px', 
              padding: '8px 16px', 
              cursor: 'pointer',
              border: 'none',
              background: 'transparent',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#666'
            }}
          >
            &lt; 뒤로가기 (자기소개)
          </button>
          <Resume />
        </div>
      ) : (
        <Introduce onNext={() => setShowResume(true)} />
      )}
    </div>
  );
}
import React, { useState } from "react";
import Introduce from "./AboutMe/Introduce"; // 같은 폴더 내에 있다고 가정 (경로에 맞게 수정해주세요)
import Resume from "./AboutMe/Resume";       // 같은 폴더 내에 있다고 가정

export default function AboutMe() {
  // false면 자기소개(Introduce), true면 이력서(Resume)를 보여줌
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="about-me-container">
      {showResume ? (
        // 1. 이력서 화면
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
        // 2. 자기소개 화면 (onNext 함수를 props로 전달)
        <Introduce onNext={() => setShowResume(true)} />
      )}
    </div>
  );
}
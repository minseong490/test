import { useState } from "react";
import ProjectData from "./Data/Projects"; 
import "../css/Project.css"; 

export default function Project() {
  const [tabIndex, setTabIndex] = useState(0);

  // 이전 버튼 (0보다 작아지면 배열의 끝으로 이동)
  const handlePrev = () => {
    setTabIndex((prev) => (prev - 1 + ProjectData.length) % ProjectData.length);
  };

  // 다음 버튼 (배열 끝을 넘어가면 0으로 이동)
  const handleNext = () => {
    setTabIndex((prev) => (prev + 1) % ProjectData.length);
  };

  return (
    <div className="project-main-container">
      {/* 1. 네비게이션 영역 */}
      <div className="project-nav-header">
        <button onClick={handlePrev} className="nav-btn">
          &lt; 이전
        </button>
        
        <h3 className="project-current-title">
          {ProjectData[tabIndex].tab}
        </h3>

        <button onClick={handleNext} className="nav-btn">
          다음 &gt;
        </button>
      </div>

      {/* 2. 콘텐츠 표시 영역 */}
      <div className="project-content-area">
        {ProjectData[tabIndex].content}
      </div>
    </div>
  );
}
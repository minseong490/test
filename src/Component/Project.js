import { useState } from "react";
import ProjectData from "./Data/Projects"; 
import "../css/Project.css"; 

export default function Project() {
  const [tabIndex, setTabIndex] = useState(0);
  const handlePrev = () => {
    setTabIndex((prev) => (prev - 1 + ProjectData.length) % ProjectData.length);
  };
  const handleNext = () => {
    setTabIndex((prev) => (prev + 1) % ProjectData.length);
  };
  return (
    <div className="project-main-container">
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

      <div className="project-content-area">
        {ProjectData[tabIndex].content}
      </div>
    </div>
  );
}
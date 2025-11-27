import { useState } from "react";
import ProjectData from "./Data/Projects"; 
import "../css/button.css";

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
    <div style={{ padding: "20px" }}>
      {/* 1. 네비게이션 영역 (이전 / 제목 / 다음) */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: "20px",
        paddingBottom: "10px",
        borderBottom: "1px solid #ddd"
      }}>
        <button onClick={handlePrev} style={{ cursor: "pointer", padding: "5px 10px" }}>
          &lt; 이전 프로젝트
        </button>
        
        <h3 style={{ margin: 0 }}>
          {ProjectData[tabIndex].tab}
        </h3>

        <button onClick={handleNext} style={{ cursor: "pointer", padding: "5px 10px" }}>
          다음 프로젝트 &gt;
        </button>
      </div>

      <div>
        {ProjectData[tabIndex].content}
      </div>
    </div>
  );
}
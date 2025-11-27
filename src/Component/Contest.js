import React from "react";
import Contests from "./Data/Contests"; // 데이터 파일 불러오기

export default function Contest() {
  return (
    <div className="contest-container" style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      
      <h1 style={{ marginBottom: "40px", textAlign: "center", borderBottom: "2px solid #ddd", paddingBottom: "20px" }}>
        🏆 공모전 활동 내역
      </h1>

      {/* 모든 공모전 데이터를 순회하며 렌더링 */}
      <div className="contest-list">
        {Contests.map((data, index) => (
          <div key={index} className="contest-item" style={{ marginBottom: "80px" }}>
            
            {/* 각 공모전의 제목 (구분선 역할) */}
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "20px", 
              color: "#5F56EF",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <span style={{ fontSize: "1.2rem" }}>#{index + 1}</span> 
              {data.tab}
            </h2>

            {/* 실제 공모전 내용 컴포넌트 (Contest1, Contest2...) */}
            <div className="contest-content" style={{ 
              padding: "30px", 
              backgroundColor: "white", 
              borderRadius: "15px", 
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)" 
            }}>
              {data.content}
            </div>

          </div>
        ))}
      </div>

    </div> 
  );
}
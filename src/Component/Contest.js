import React from "react";
import Contests from "./Data/Contests"; 
import "../css/Contest.css"; 

export default function Contest() {
  return (
    <div className="contest-container">
      
      <h1 className="contest-title">
        🏆 공모전&해커톤 활동 내역
      </h1>

      {/* 모든 공모전 데이터를 순회하며 렌더링 */}
      <div className="contest-list">
        {Contests.map((data, index) => (
          <div key={index} className="contest-item">
            
            {/* 각 공모전의 제목 */}
            <h2 className="contest-item-title">
              <span className="contest-item-index">#{index + 1}</span> 
              {data.tab}
            </h2>

            {/* 실제 공모전 내용 컴포넌트 */}
            <div className="contest-content">
              {data.content}
            </div>

          </div>
        ))}
      </div>

    </div> 
  );
}
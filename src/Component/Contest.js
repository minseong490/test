import React from "react";
import Contests from "./Data/Contests";
import "../css/Contest.css";

export default function Contest() {
  return (
    <div className="contest-container">
      <h1 className="contest-title">🏆 공모전&해커톤 활동 내역</h1>

      <div className="contest-list">
        {Contests.map((data, index) => (
          <div key={index} className="contest-item">
            <h2 className="contest-item-title">
              <span>#{index + 1}</span>
              {data.tab}
            </h2>

            <div>{data.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

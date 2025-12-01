import React from "react";
import "../../css/project123.css"; 

function Project2() {
  return (
    <div className="project-detail-container">
      <div className="project-image-list">
        <div className="project-image-wrapper">
          <img
            src="/images/project2_1.png"
            alt="서비스 메인 화면"
            className="project-img"
          />
        </div>

        <div className="project-image-wrapper">
          <img
            src="/images/project2_2.png"
            alt="서비스 메인 화면"
            className="project-img"
          />
        </div>

        <div className="project-image-wrapper">
          <img
            src="/images/project2_3.png"
            alt="서비스 메인 화면"
            className="project-img"
          />
        </div>
      </div>

      <div className="project-description">
        <h2 className="project-title">Project 2: 출근룩 추천 서비스</h2>

        <div className="tech-stack">
          <span className="tech-badge">React</span>
          <span className="tech-badge">CSS</span>
          <span className="tech-badge">Axios</span>
        </div>

        <p className="project-text">
          이 서비스는 바쁜 아침, 옷장 앞에서 고민하는 직장인/학생들의 시간을 절약해줍니다. <br/>
          기온차, 비/눈 등 날씨 변화에 실패하지 않는 옷차림 제안합니다. <br/>
          개인의 취향(퍼스널 컬러, 체형)을 분석하여 맞춤형 스타일링 제공합니다.
        </p>

        <h3 className="feature-title">주요 기능</h3>
        <ul className="feature-list">
          <li>날씨 기반 맞춤 코디 추천</li>
          <li>다크 모드 지원</li>
          <li>마이페이지 & 취향 추천 기능</li>
        </ul>
      </div>
    </div>
  );
}

export default Project2;

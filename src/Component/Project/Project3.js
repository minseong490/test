import React from "react";
import "../../css/project123.css";

function Project3() {
  return (
    <div className="project-detail-container">
      <div className="project-image-list">
        <div className="project-image-wrapper">
          <img
            src="/images/project3_1.png"
            alt="서비스 메인 화면"
            className="project-img"
          />
        </div>

        <div className="project-image-wrapper">
          <img
            src="/images/project3_2.png"
            alt="서비스 메인 화면"
            className="project-img"
          />
        </div>

        <div className="project-image-wrapper">
          <img
            src="/images/project3_3.png"
            alt="서비스 메인 화면"
            className="project-img"
          />
        </div>
      </div>

      <div className="project-description">
        <h2 className="project-title">
          Project 3: 단백질 파우더 최저가 알림 서비스
        </h2>

        <div className="tech-stack">
          <span className="tech-badge">React</span>
          <span className="tech-badge">CSS</span>
          <span className="tech-badge">Express</span>
        </div>

        <p className="project-text">
          보충제는 소모품이라 주기적으로 구매해야 하는데, 프로모션이나 환율에
          따라 가격 변동폭이 큽니다.
          <br />이 서비스는 매번 사이트에 들어가 확인하는 번거로움을 자동화
          기술로 해결합니다.
        </p>

        <h3 className="feature-title">주요 기능</h3>
        <ul className="feature-list">
          <li>웹 크롤링 & 자동 가격 갱신</li>
          <li>목표가 알림 설정</li>
          <li>가격 변동 히스토리 그래프 제공</li>
          <li>맛/성분 필터링 검색</li>
        </ul>
      </div>
    </div>
  );
}

export default Project3;

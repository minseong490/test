import React from "react";
import "../../css/project123.css"; // 사용자 정의 CSS 경로

function Project2() {
  return (
    <div className="project-detail-container">
      <div className="project-image-list">
        <div className="project-image-wrapper">
          <img
            src="/images/project1_1.png"
            alt="웹 포트폴리오 메인 화면"
            className="project-img"
          />
        </div>

        <div className="project-image-wrapper">
          <img
            src="/images/project1_2.png"
            alt="웹 포트폴리오 메인 화면"
            className="project-img"
          />
        </div>

        <div className="project-image-wrapper">
          <img
            src="/images/project1_3.png"
            alt="웹 포트폴리오 메인 화면"
            className="project-img"
          />
        </div>
      </div>

      <div className="project-description">
        <h2 className="project-title">Project 1: 웹 포트폴리오</h2>

        <div className="tech-stack">
          <span className="tech-badge">React</span>
          <span className="tech-badge">CSS</span>
        </div>

        <p className="project-text">
          이 프로젝트는 개인 포트폴리오 용도로 제작된 웹사이트입니다. <br />
          왼쪽에는 포트폴리오의 주요 스크린샷들을 배치하였습니다.
        </p>

        <h3 className="feature-title">주요 기능</h3>
        <ul className="feature-list">
          <li>반응형 레이아웃 구성</li>
          <li>다크 모드 지원</li>
          <li>프로젝트 탭 전환 기능</li>
        </ul>
      </div>
    </div>
  );
}

export default Project2;

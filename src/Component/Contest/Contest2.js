import React from "react";
import "../../css/contest123.css";

function Contest2() {
  return (
    <div className="contest-detail">
      <div className="contest-header">
        <h1 className="contest-title">구름톤 in Jeju</h1>
        <p className="contest-meta">
          <strong>기간:</strong> 202X.XX.XX ~ 202X.XX.XX
        </p>
      </div>

      <section className="contest-section">
        <h3 className="contest-section-title">참가 소감</h3>

        <div className="contest-image-wrapper">
          <img src="/images/contest2.png" alt="참가 모습" />
        </div>

        <h3>
          제주도 합숙, 기획자/디자이너/개발자 랜덤 팀 빌딩, 카카오 클라우드 교육
          포함
        </h3>

        <p className="contest-description">
          제주도라는 장소가 주는 몰입감이 최고입니다. 3박 4일이라 여유로울 줄
          알았는데, 실제로 개발할 시간은 1.5일 정도로 매우 촉박해 '빠른
          의사결정'이 승패를 갈랐습니다. 현직자 멘토링이 아주 구체적이며, 특히
          React나 Spring 같은 웹/앱 스택을 사용하는 팀이 많아 기술적으로 배울
          점이 많습니다. 끝나고 팀원들과 마시는 제주 맥주는 잊을 수 없습니다.
        </p>
      </section>
    </div>
  );
}

export default Contest2;

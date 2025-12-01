import React from "react";
import "../../css/contest123.css";
function Contest1() {
  return (
    <div className="contest-detail">
      <div className="contest-header">
        <h1 className="contest-title">정션 아시아 2024</h1>
        <p className="contest-meta">
          <strong>기간:</strong> 2024.08.09 ~ 2024.08.11
        </p>
      </div>

      <section className="contest-section">
        <h3 className="contest-section-title">참가 소감</h3>

        <div className="contest-image-wrapper">
          <img src="/images/contest1.png" alt="참가 모습" />
        </div>

        <h3>
          100% 영어 진행, 글로벌 참가자와의 네트워킹, 기업 트랙(발제) 기반 문제
          해결
        </h3>

        <p className="contest-description">
          확실히 국내 해커톤과는 분위기가 다릅니다. 외국인 참가자가 많아 영어
          소통 능력이 중요했고, 단순 개발보다 '글로벌 네트워킹' 파티 같은 느낌이
          강했습니다. 2박 3일 동안 잠을 거의 못 자서 힘들었지만, 현업 멘토들의
          피드백 수준이 높았습니다. 다만, 행사장의 와이파이 네트워크 이슈로 배포
          과정에서 식은땀을 흘렸던 기억이 납니다. 색다른 자극과 도파민이 필요한
          분들에게 강력 추천합니다.
        </p>
      </section>
    </div>
  );
}

export default Contest1;

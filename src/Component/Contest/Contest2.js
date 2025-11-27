import React from 'react';
import '../../css/contest123.css'; // [중요] 분리한 CSS 파일 불러오기

function Contest2() {
  return (
    <div className="contest-detail">
      
      {/* 1. 메인 타이틀 및 개요 */}
      <div className="contest-header">
        <h1 className="contest-title">제 1회 대학생 SW 해커톤</h1>
        <p className="contest-meta">
          <strong>기간:</strong> 2023.08.01 ~ 2023.08.03
        </p>
      </div>

      {/* 2. 첫 번째 섹션: 아이디어 기획 */}
      <section className="contest-section">
        <h3 className="contest-section-title">
          💡 아이디어 기획 단계
        </h3>
        
        {/* 사진 영역 */}
        <div className="contest-image-wrapper">
          {/* <img src="/images/contest1_brainstorming.jpg" alt="브레인스토밍" /> */}
          <span>[사진: 팀원들과 브레인스토밍 하는 모습]</span>
        </div>

        {/* 설명 영역 */}
        <p className="contest-description">
          우리 팀은 '시각장애인을 위한 대중교통 안내 서비스'를 주제로 선정했습니다. 
          기존 앱들이 음성 안내에만 의존한다는 점에 착안하여, 햅틱(진동) 피드백과 고정밀 GPS를 결합한 솔루션을 제안했습니다.
          첫날 밤샘 회의를 통해 페르소나를 설정하고, 사용자 여정 지도(User Journey Map)를 그리며 구체적인 기능을 확정했습니다.
        </p>
      </section>

      {/* 필요한 경우 아래에 추가 섹션을 같은 구조로 복사해서 넣으시면 됩니다. */}
      {/* <section className="contest-section">
        <h3 className="contest-section-title">💻 개발 과정</h3>
        <div className="contest-image-wrapper"><span>[사진]</span></div>
        <p className="contest-description">설명...</p>
      </section> 
      */}

    </div>
  );
}

export default Contest2;
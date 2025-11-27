import React from 'react';

// CSS 스타일 (버튼 스타일 포함)
const introduceStyles = `
/* 섹션 전체 레이아웃 */
.introduce-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  min-height: 60vh;
  flex-direction: column; /* 세로 정렬 */
}

/* 내용 컨테이너 */
.introduce-container {
  max-width: 800px;
  width: 100%;
  text-align: left;
  margin-bottom: 3rem; /* 버튼과의 간격 */
}

/* 제목 스타일 */
.introduce-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  word-break: keep-all;
}

.introduce-title .highlight {
  color: #5F56EF; /* 포인트 컬러 */
}

/* 본문 스타일 */
.introduce-description {
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.9;
  word-break: keep-all;
  margin-top: 0;
}

.introduce-description .bold-text {
  font-weight: 700;
  border-bottom: 2px solid rgba(128, 128, 128, 0.3);
}

/* [핵심] 이력서 이동 버튼 스타일 */
.resume-btn {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  background-color: #5F56EF;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(95, 86, 239, 0.3);
  transition: all 0.3s ease;
  margin-top: 20px; /* 상단 여백 추가 */
}

.resume-btn:hover {
  background-color: #4a42db;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(95, 86, 239, 0.4);
}

.resume-btn:active {
  transform: translateY(-1px);
}

/* 모바일 반응형 */
@media (max-width: 768px) {
  .introduce-section {
    padding: 2rem 1rem;
    min-height: auto;
  }
  .introduce-title { font-size: 2rem; }
  .introduce-description { font-size: 1rem; }
}
`;

function Introduce({ onNext }) {
  return (
    <>
      <style>{introduceStyles}</style>
      <section className="introduce-section">
        <div className="introduce-container">
          <h1 className="introduce-title">
            어제보다 더 나은 코드를<br />
            고민하는 개발자, <span className="highlight">김민성</span>입니다.
          </h1>
          <p className="introduce-description">
            새로운 기술을 배우는 것을 두려워하지 않고, 마주한 에러를 끝까지 파고들어 해결할 때 즐거움을 느낍니다. 
            단순히 작동하는 코드가 아닌, <span className="bold-text">'왜 이렇게 작성했는지'</span>를 설명할 수 있는 개발자가 되기 위해 끊임없이 고민합니다. 
            실패를 성장의 밑거름으로 삼아 팀과 함께 발전하고 싶습니다.
          </p>
        </div>

        {/* ▼▼▼ 이 버튼 코드가 꼭 있어야 화면에 보입니다 ▼▼▼ */}
        <button className="resume-btn" onClick={onNext}>
          이력서 보러가기 &rarr;
        </button>
      </section>
    </>
  );
}

export default Introduce;
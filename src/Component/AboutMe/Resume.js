import React from 'react';

// CSS 스타일 (테이블 및 뱃지 스타일)
const resumeStyles = `
  .resume-container {
    padding: 1rem;
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease-in-out;
  }

  /* 섹션 제목 스타일 */
  .section-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    border-left: 5px solid #5F56EF; /* 포인트 컬러 */
    padding-left: 12px;
    display: flex;
    align-items: center;
  }

  /* 1. 기술 스택 뱃지 스타일 */
  .tech-stack-wrapper {
    margin-bottom: 2rem;
  }
  
  .tech-stack-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 1rem;
  }

  .tech-badge {
    background-color: rgba(95, 86, 239, 0.1);
    color: #5F56EF;
    border: 1px solid rgba(95, 86, 239, 0.3);
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.2s;
  }

  .tech-badge:hover {
    background-color: rgba(95, 86, 239, 0.2);
    transform: translateY(-2px);
  }

  .tech-description {
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 1rem;
  }

  /* 2. 테이블 공통 스타일 */
  .resume-table-wrapper {
    overflow-x: auto; /* 모바일에서 가로 스크롤 허용 */
  }

  .resume-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  .resume-table th {
    text-align: left;
    padding: 12px;
    border-bottom: 2px solid rgba(128, 128, 128, 0.2);
    font-weight: 700;
    opacity: 0.8;
    background-color: rgba(128, 128, 128, 0.05);
    white-space: nowrap; /* 제목 줄바꿈 방지 */
  }

  .resume-table td {
    padding: 12px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.1);
    vertical-align: middle;
  }

  .resume-table tr:last-child td {
    border-bottom: none;
  }
`;

function Resume() {
  return (
    <>
      <style>{resumeStyles}</style>
      <div className="resume-container">
        
        {/* 타이틀 */}
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '10px' }}>
          Resume
        </h1>

        {/* 1. 기술 스택 (Tech Stack) */}
        <section className="resume-section">
          <h2 className="section-title">💻 기술 스택</h2>
          <div className="tech-stack-wrapper">
            <p className="tech-description">
              React 생태계를 중심으로 한 프론트엔드 개발에 강점이 있습니다.<br/>
              사용자 경험(UX) 향상을 위한 UI 인터랙션 구현과 재사용 가능한 컴포넌트 설계에 관심이 많습니다.
            </p>
            <div className="tech-stack-grid">
              {/* 필요하신 스택으로 수정/추가 하세요 */}
              <span className="tech-badge">React</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">HTML5 / CSS3</span>
              <span className="tech-badge">Styled-Components</span>
              <span className="tech-badge">Git / GitHub</span>
            </div>
          </div>
        </section>

        {/* 2. 학력 (Education) */}
        <section className="resume-section">
          <h2 className="section-title">🎓 학력</h2>
          <div className="resume-table-wrapper">
            <table className="resume-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>기간</th>
                  <th style={{ width: '30%' }}>학교명</th>
                  <th style={{ width: '25%' }}>전공</th>
                  <th style={{ width: '15%' }}>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2022.03 ~ 2028.02</td>
                  <td>가천대학교</td>
                  <td>컴퓨터공학과</td>
                  <td>졸업</td>
                </tr>
                {/* 추가 행이 필요하면 여기에 <tr>...</tr> 추가 */}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. 경력 (Career) */}
        <section className="resume-section">
          <h2 className="section-title">🏢 경력</h2>
          <div className="resume-table-wrapper">
            <table className="resume-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>기간</th>
                  <th style={{ width: '25%' }}>회사명</th>
                  <th style={{ width: '15%' }}>직위</th>
                  <th style={{ width: '30%' }}>담당업무</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20XX.06 ~ 20XX.12</td>
                  <td>스타트업 (인턴)</td>
                  <td>프론트엔드</td>
                  <td>웹 서비스 UI 개발 및 유지보수</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. 자격증 (Certificates) */}
        <section className="resume-section">
          <h2 className="section-title">📜 자격증</h2>
          <div className="resume-table-wrapper">
            <table className="resume-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>취득일</th>
                  <th style={{ width: '40%' }}>자격증명</th>
                  <th style={{ width: '30%' }}>발행처</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025.08.22</td>
                  <td>SQLD</td>
                  <td>한국데이터산업진흥원</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. 수상 경력 (Awards) */}
        <section className="resume-section">
          <h2 className="section-title">🏆 수상 경력</h2>
          <div className="resume-table-wrapper">
            <table className="resume-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>수상일</th>
                  <th style={{ width: '40%' }}>수상명</th>
                  <th style={{ width: '30%' }}>수여기관</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20XX.XX.XX</td>
                  <td>교내 해커톤 대상</td>
                  <td>가천대학교</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  );
}

export default Resume;
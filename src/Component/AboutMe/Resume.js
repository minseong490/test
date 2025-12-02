import React from "react";
import "../../css/Resume.css";

export default function Resume() {
  return (
    <div>
      <div className="resume-container">
        <h1>Resume</h1>

        <section>
          <h2 className="section-title">💻 기술 스택</h2>
          <div className="tech-stack-wrapper">
            <p className="tech-description">
              React 생태계를 중심으로 한 프론트엔드 개발에 강점이 있습니다.
              <br />
              사용자 경험(UX) 향상을 위한 UI 인터랙션 구현과 재사용 가능한
              컴포넌트 설계에 관심이 많습니다.
            </p>
            <div className="tech-stack-grid">
              <span className="tech-badge">React</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">HTML5 / CSS3</span>
              <span className="tech-badge">Styled-Components</span>
              <span className="tech-badge">Git / GitHub</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title">🎓 학력</h2>
          <div>
            <table className="resume-table">
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>기간</th>
                  <th style={{ width: "30%" }}>학교명</th>
                  <th style={{ width: "25%" }}>전공</th>
                  <th style={{ width: "15%" }}>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2022.03 ~ 2028.02</td>
                  <td>가천대학교</td>
                  <td>컴퓨터공학과</td>
                  <td>졸업</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="section-title">🏢 경력</h2>
          <div>
            <table className="resume-table">
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>기간</th>
                  <th style={{ width: "25%" }}>회사명</th>
                  <th style={{ width: "15%" }}>직위</th>
                  <th style={{ width: "30%" }}>담당업무</th>
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

        <section>
          <h2 className="section-title">📜 자격증</h2>
          <div>
            <table className="resume-table">
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>취득일</th>
                  <th style={{ width: "40%" }}>자격증명</th>
                  <th style={{ width: "30%" }}>발행처</th>
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

        <section>
          <h2 className="section-title">🏆 수상 경력</h2>
          <div>
            <table className="resume-table">
              <thead>
                <tr>
                  <th style={{ width: "30%" }}>수상일</th>
                  <th style={{ width: "40%" }}>수상명</th>
                  <th style={{ width: "30%" }}>수여기관</th>
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
    </div>
  );
}
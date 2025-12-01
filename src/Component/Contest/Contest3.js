import React from "react";
import "../../css/contest123.css";

function Contest3() {
  return (
    <div className="contest-detail">
      <div className="contest-header">
        <h1 className="contest-title">2024 멋쟁이사자처럼 대학 연합 해커톤</h1>
        <p className="contest-meta">
          <strong>기간:</strong> 2024.08.06 ~ 2024.08.07
        </p>
      </div>

      <section className="contest-section">
        <h3 className="contest-section-title">참가 소감</h3>

        <div className="contest-image-wrapper">
          <img src="/images/contest3.png" alt="참가 모습" />
        </div>

        <h3>약 1,500명 규모의 압도적인 인원, 웹/앱 서비스 런칭 목표</h3>

        <p className="contest-description">
          입장 줄부터 끝이 보이지 않을 정도로 규모에 압도되었습니다. 수천 명의
          개발자가 한 공간에서 밤을 새우는 광경만으로도 '더 열심히 살아야겠다'는
          동기부여가 됩니다. 인원이 너무 많아 핫스팟이 잘 안 터지는 등 네트워크
          문제가 있었지만, 타 대학 학생들과 교류할 수 있는 네트워킹 이벤트가 잘
          되어 있습니다. 수상보다는 완성과 배포 자체에 의의를 두는 팀들이
          많았고, 밤샘 개발 후 첫차 타고 집에 갈 때의 뿌듯함은 최고였습니다.
        </p>
      </section>
    </div>
  );
}

export default Contest3;

import React from 'react';
import '../../css/Introduce.css';

function Introduce({ onNext }) {
  return (
    <div>
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

        <button className="resume-btn" onClick={onNext}>
          이력서 보러가기 &rarr;
        </button>
      </section>
    </div>
  );
}

export default Introduce;
import React, { useRef, useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameInputRef = useRef(null); // 초기값 null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`고마워요, ${formData.name}님! 메시지가 성공적으로 전송되었습니다.`);
    setFormData({ name: "", email: "", message: "" }); // 입력창 비우기(State 초기화)

    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      iconPath: "/images/instagram.png",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      iconPath: "/images/facebook.png",
    },
    {
      name: "Github",
      url: "https://www.github.com/",
      iconPath: "/images/github.png",
    },
  ];

  const iconStyle = {
    width: "40px",
    height: "40px",
    objectFit: "cover",
  };

  const wordStyle = {
    fontSize: "25px",
    fontWeight: "800",
    lineHeight: "1.8",
  };

  return (
    <div>
      <h2>연락처</h2>
      <p style={wordStyle}>
        아래 아이콘을 클릭하면 저의 페이지로 연결됩니다.
        <br />
        새로운 프로젝트, 협업 제안, 또는 가벼운 커피챗도 환영합니다!
      </p>

      <section>
        <h3>이메일 보내기</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              ref={nameInputRef}
              placeholder="성함을 입력해주세요"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="답변 받으실 이메일 주소"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="내용을 입력해주세요."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">보내기</button>
        </form>
      </section>
      <p>클릭 시 해당 링크로 연결됩니다.</p>
      <div style={{ display: "flex", gap: "20px" }}>
        {socialLinks.map((social) => (
          <a
            key={social.name} // map 사용 시 고유 key
            href={social.url}
            target="_blank" // 새 탭에서 열기
            rel="noopener noreferrer"
            title={social.name} // 마우스 호버 시 툴팁
          >
            <img
              src={social.iconPath} // 배열에 정의된 이미지 경로
              alt={`${social.name} 로고`} // 접근성을 위한 alt 텍스트
              style={iconStyle} // 공통 스타일 적용
            />
          </a>
        ))}
      </div>
    </div>
  );
}

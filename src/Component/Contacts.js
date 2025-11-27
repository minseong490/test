import React from "react";

export default function Contacts() {
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

  return (
    <div>
      <h2>연락처</h2>
      <p>아래 아이콘을 클릭하면 저의 페이지로 연결됩니다.</p>
      <p>새로운 프로젝트, 협업 제안, 또는 가벼운 커피챗도 환영합니다!</p>

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

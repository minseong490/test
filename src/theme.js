// src/theme.js

// 1. 다크 모드 테마 (제공해주신 색상 기준)
export const darkTheme = {
  background: "#222831", // 60% (주 배경)
  backgroundSecondary: "#393E46", // 20% (카드, 헤더 등 보조 배경)
  primary: "#00ADB5", // 10% (포인트 색상, 버튼 등)
  text: "#EEEEEE", // 10% (기본 텍스트)
};

// 2. 라이트 모드 테마 (위 색상들을 반전)
export const lightTheme = {
  background: "#EEEEEE", // 다크 모드의 텍스트 -> 라이트 모드 배경
  backgroundSecondary: "#FFFFFF", // 카드 등은 순백색으로 구분
  primary: "#00ADB5", // 포인트 색상은 유지
  text: "#222831", // 다크 모드의 배경 -> 라이트 모드 텍스트
};

// 3. 나중에 쉽게 가져다 쓸 수 있도록 객체로 묶어 export
export const theme = {
  light: lightTheme,
  dark: darkTheme,
};

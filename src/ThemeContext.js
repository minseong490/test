import React from "react";
import { theme } from "./theme"; // 기본 테마 값 import

export const ThemeContext = React.createContext({
  theme: theme.dark, // 기본값으로 다크 테마 지정
  toggleTheme: () => {}, // 기본값으로 빈 함수 지정
});

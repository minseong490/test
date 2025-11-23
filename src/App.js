import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { theme } from "./theme";
import Index from "./Component/Index";
import AboutMe from "./Component/AboutMe";
import Project from "./Component/Project";
import Contest from "./Component/Contest";
import Contacts from "./Component/Contacts";
import "./App.css"; // CSS 파일 임포트 확인

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const selectedTheme = theme[currentTheme];

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme: selectedTheme, toggleTheme }}>
        <div
          className="app-wrapper"
          style={{
            // 동적 스타일: 테마에 따라 바뀌는 색상은 여기서 JS 변수로 주입합니다.
            backgroundColor: selectedTheme.background,
            color: selectedTheme.text,
          }}
        >
          <nav className="sidebar">
            <Link to="/AboutMe">About me</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contest">Contests</Link>
            <Link to="/Contacts">Contacts</Link>

            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {currentTheme === "dark" ? "☀️ 라이트" : "🌙 다크"}
            </button>
          </nav>

          <div className="container">
            <header className="app-header">
              <div className="logo">김민성의 portfolio </div>
            </header>
            <main className="app-section">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contest" element={<Contest />} />
                <Route path="/Contacts" element={<Contacts />} />
              </Routes>
            </main>
          </div>

          <footer>
            <i>Copyright 2025. 지은이 all rights reserved.</i>
          </footer>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

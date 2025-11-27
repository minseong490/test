import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { theme } from "./theme";
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
              
              {/* 1. 프로필 사진 (원형) */}
              <div className="profile-image-container">
                {/* 실제 사용하실 이미지 URL을 src에 넣어주세요 */}
                <img 
                  src="/images/profile.png" 
                  alt="프로필"
                  className="profile-img" 
                />
              </div>

              {/* 2. 개인 정보 텍스트 */}
              <div className="profile-info">
                <h2 className="profile-name">김민성</h2>
                <div className="profile-details">
                  <p>📅 2003.12.02</p>
                  <p>📧 qnemek@naver.com</p>
                  <p>📞 010-5031-4307</p>
                </div>
              </div>

            </header>
            <main className="app-section">
              <Routes>
                <Route path="/" element={<AboutMe />} />
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

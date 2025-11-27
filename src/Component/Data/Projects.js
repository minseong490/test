// 상위 폴더(..)로 나가서 components 폴더로 진입
import Project1 from "../Project/Project1";
import Project2 from "../Project/Project2";
import Project3 from "../Project/Project3";

const Projects = [
  { tab: "프로젝트 1: 웹 포트폴리오", content: <Project1 /> },
  { tab: "프로젝트 2: 쇼핑몰 앱", content: <Project2 /> },
  { tab: "프로젝트 3: 투두 리스트", content: <Project3 /> },
];

export default Projects;
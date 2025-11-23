import { useState } from "react";
import Project from "./Data/Projects";

export default function AboutMe() {
  const [tabIndex, setTabIndex] = useState(0);
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div>
      {Project.map((data, i) => (
        <button key={data.tab} onClick={contentChange} value={i}>
          {data.tab}
        </button>
      ))}
      <div style={{ marginTop: "1em" }}>{Project[tabIndex].content}</div>
    </div>
  );
}

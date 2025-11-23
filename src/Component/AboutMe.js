import { useState } from "react";
import AboutMes from "./Data/AboutMes";

export default function AboutMe() {
  const [tabIndex, setTabIndex] = useState(0);
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div>
      {AboutMes.map((data, i) => (
        <button key={data.tab} onClick={contentChange} value={i}>
          {data.tab}
        </button>
      ))}
      <div style={{ marginTop: "1em" }}>{AboutMes[tabIndex].content}</div>
    </div>
  );
}

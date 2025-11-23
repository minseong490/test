import { useState } from "react";
import Contests from "./Data/Contests";

export default function AboutMe() {
  const [tabIndex, setTabIndex] = useState(0);
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div>
      {Contests.map((data, i) => (
        <button key={data.tab} onClick={contentChange} value={i}>
          {data.tab}
        </button>
      ))}
      <div style={{ marginTop: "1em" }}>{Contests[tabIndex].content}</div>
    </div> 
  );
}

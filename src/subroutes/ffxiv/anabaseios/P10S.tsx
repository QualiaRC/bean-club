
import YouTube from "../components/Youtube";
import Timeline from "../components/Timeline";
import { useEffect, useState } from "react";
import TableOfContents from "../components/TableOfContents";

const Videos:string[] = [];

const Diagrams:string[] = [];

function P10S() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".anabaseios-guide > h2")));
  }, []);

  return (
    <>
      <div className="section anabaseios-guide">
        <h1>Pandæmonium</h1>

        <h2 id="party-organization">Party Organization</h2>
        <ul className="toolboxes">
          <li><button onClick={() => window.open("https://raidplan.io/plan/p1GAzp_0us7jf-dy", "_blank")}>General-purpose positions</button></li>
        </ul>

        <h2 id="toolboxes">Toolboxes (Outdated)</h2>
        <ul className="toolboxes">
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=206884547365861&preview=1", "_blank")}>Single Platform Dæmonic Bonds 1</button></li>
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=816888050465861&preview=1", "_blank")}>Limit Cut Cursed Pattern</button></li>
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=179781809255861&preview=1", "_blank")}>Pandæmoniac Web</button></li>

        </ul>
      </div>

      <TableOfContents sections={sections} />
    </>
  );
}

export default P10S;
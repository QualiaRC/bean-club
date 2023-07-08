
import { useEffect, useState } from "react";
import TableOfContents from "../components/TableOfContents";

const Videos:string[] = [];

const Diagrams:string[] = [];

function P9S() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".anabaseios-guide > h2")));
  }, []);

  return (
    <>
      <div className="section anabaseios-guide">
        <h1>Kokytos</h1>

        <h2 id="party-organization">Party Organization</h2>
        <ul>
          <li>Role-partners (DPS and Support) for Fire/Ice and KB stacks<br />Use clock spots, supports rotate into DPS with the same marker colors.</li>
          <li>2 light parties for healer stacks</li>
        </ul>


        <h2 id="toolboxes">Toolboxes (Outdated)</h2>
        <ul className="toolboxes">
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=883781327545861&preview=1", "_blank")}>Beginning to Limit Cut  1</button></li>
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=491781443145861&preview=1", "_blank")}>Limit Cut 1 to Meteors</button></li>
          <br />
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=081781415935861&preview=1", "_blank")}>First Dual Spells</button></li>
          <br />
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=154787554645861&preview=1", "_blank")}>Limit Cut 1</button></li>
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=441884512555861&preview=1", "_blank")}>Limit Cut 2</button></li>
        </ul>
      </div>

      <TableOfContents sections={sections} />
    </>
  );
}

export default P9S;
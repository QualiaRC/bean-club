import IconGrid from "../components/IconGrid";
import { eIcon } from "../components/Icon";
import TableOfContents from "../components/TableOfContents";
import { useEffect, useState } from "react";

function P1() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".dragonsong-guide > h2")));
  }, []);

  return (
    <>
      <div className="section dragonsong-guide">
        <h1>Phase 1 (Ser Adelphel and Ser Grinnaux)</h1>
        <h2 id="party-organization">Party Organiation</h2>
        <ul>
          <li>Determine which tank will take which enemy.</li>
          <li>Determine who will interrupt Adelphel's casts.<br />
            <i>We usually have the Adelphel tank interrupt casts 1 and 3, and phys ranged interrupt 2.</i></li>
          <li>Determine a role order for the Chardibert baits.<br />
            <i>Recommended to do HMRT for consistency with the intermission phase.</i></li>
        </ul>

        <br />
        Playstation Positions <i>(From 12-o'clock, TTDHHDDD)</i><br />
        <IconGrid grid={[
          [null, null, eIcon.MARKER_X],
          [null, eIcon.MARKER_TRIANGLE, null, eIcon.MARKER_SQUARE],
          [eIcon.MARKER_CIRCLE, null, eIcon.MARKER_BOSS, null, eIcon.MARKER_CIRCLE],
          [null, eIcon.MARKER_SQUARE, null, eIcon.MARKER_TRIANGLE],
          [null, null, eIcon.MARKER_X],

        ]} />

        <h2 id="toolboxes">Toolboxes</h2>
        <ul className="toolboxes">
          <li>
            <button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=802461081524561&preview=1", "_blank")}>Entire Phase</button>
          </li>
        </ul>
      </div>
      
      <TableOfContents sections={sections} />
    </>
  )
}

export default P1;
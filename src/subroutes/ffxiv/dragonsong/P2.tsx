import IconGrid from "../components/IconGrid";
import { eIcon } from "../components/Icon";
import TableOfContents from "../components/TableOfContents";
import { useEffect, useState } from "react";

const Diagrams = [
  "https://cdn.discordapp.com/attachments/1063314879668305950/1063315562341617695/unknown.png",
  "https://cdn.discordapp.com/attachments/1063314879668305950/1063315619044401193/unknown.png"
];

function P2() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".dragonsong-guide > h2")));
  }, []);

  return (
    <>
      <div className="section dragonsong-guide">
        <h1>Phase 2 (Thordan)</h1>
        <h2 id="party-organization">Party Organiation</h2>
        <ul>
          <li>Split the group into two light parties.<br />
            <i>For Strength of the Ward, #1 takes Numbers and #2 takes Letters.</i><br />
            <i>For Sanctity dashes, #1 goes away from DRK and #2 goes behind DRK.</i>
          </li>
          <li>Assign two party members in each group to flex for Sanctity dashes if needed.</li>
          <li>Assign pairs for meteor cardinals<br />
            <i>(Clockwise from 12 o'clock, TM -&gt; HR -&gt; TM -&gt; HR)</i>
          </li>
        </ul>

        <br />
        Strength of the Ward Light Parties:<br />
        <IconGrid grid={[
          [eIcon.SAM, null, null, null, eIcon.NIN],
          [eIcon.AST, eIcon.PLD, null, eIcon.WAR, eIcon.SCH],
          [eIcon.RDM, null, null, null, eIcon.DNC]
        ]} />

        <br />
        Meteor Groups:<br />
        <IconGrid grid={[
          [null, eIcon.WAR, eIcon.NIN],
          [eIcon.RDM, null, null, eIcon.SCH],
          [eIcon.AST, null, null, eIcon.DNC],
          [null, eIcon.SAM, eIcon.PLD]
        ]} />

        <h2 id="Diagrams">Diagrams</h2>
        <ul className="diagrams">
          {
            Diagrams.map((url: string) => {
              return <li key={url}><img src={url} alt="" /></li>
            })
          }
        </ul>

        <h2 id="toolboxes">Toolboxes</h2>
        <ul className="toolboxes">
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=142464107924561&preview=1", "_blank")}>Entire Phase</button></li>
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=178757258401561&preview=1", "_blank")}>Strength of the Ward</button></li>
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=819751877501561&preview=1", "_blank")}>Towers/Meteors</button></li>
        </ul>
      </div>

      <TableOfContents sections={sections} />
    </>
  )
}

export default P2;
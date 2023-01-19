import IconGrid from "../components/IconGrid";
import { eIcon } from "../components/Icon";
import TableOfContents from "../components/TableOfContents";
import { useEffect, useState } from "react";

const Diagrams = [
  "https://cdn.discordapp.com/attachments/1063314968830816296/1063315963174453298/unknown.png"
];

function P3() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".dragonsong-guide > h2")));
  }, []);

  return (
    <>
      <div className="section dragonsong-guide">
        <h1>Phase 3 (Nidhogg)</h1>
        <h2 id="party-organization">Party Organiation</h2>
        <ul>
          <li>Initial intercard pairs for enumeration, with one melee per tower.<br />
            <i>We use P2 meteor positions shifted 45 degrees clockwise, with DPS moving to the next clockwise pair to guarantee a melee in each group.</i><br />
            <i>We have melees adjust in priority of CW &gt; CCW &ct; across from their initial tower if it's a 1 stack.</i>
          </li>
        </ul>

        <br />
        Enumeration Positions (Melees adjust, group stacks N after resolving):<br />
        <IconGrid grid={[
          [null, eIcon.AST, null, eIcon.RDM],
          [eIcon.SAM, null, null, null, eIcon.WAR],
          [null, null, eIcon.MARKER_BOSS],
          [eIcon.PLD, null, null, null, eIcon.NIN],
          [null, eIcon.DNC, null, eIcon.SCH]
        ]} />

        <h2 id="Strategies">Strategies</h2>
        Wyrmhole Breakdown for each number:
        <ol>
          <li>
            <ul>
              <li>
                Preposition E/W/S for towers
                <ul><li>If arrows, adjust accordingly</li></ul>
              </li>
              <li>Drop your tower</li>
              <li>Do Dynamo and Chariot, while walking N</li>
              <li>After #2 towers drop, E/W soak the corresponding towers</li>
              <li>Bait the line AoE away from the group</li>
              <li>Group N to soak the stack</li>
              <li>
                Do Dynamo and Chariot
                <ul><li>The initial S player should soak the #3 S tower, then bait the line AoE away from the group</li></ul>
              </li>
            </ul>
          </li>

          <li>
            <ul>
              <li>Preposition left or right of the N stack to indicate your desired tower position</li>
              <li>
                Group N to soak the stack
                <ul><li>If arrows, adjust/preposition accordingly</li></ul>
              </li>
              <li>Do Dynamo and Chariot</li>
              <li>Drop your tower NE/NW of the boss</li>
              <li>Group N to soak the stack</li>
              <li>Do Dynamo and Chariot, while moving towards your corresponding E/W #3 tower</li>
              <li>Soak the #3 towers</li>
              <li>Bait the line AoEs away from the group</li>
            </ul>
          </li>

          <li>
            <ul>
              <li>Preposition left, right or mid of the N stack to indicate your desired tower position</li>
              <li>
                Group N to soak the stack
                <ul><li>If arrows, adjust/preposition accordingly</li></ul>
              </li>
              <li>Do Dynamo and Chariot, while moving towards your corresponding E/W/S tower</li>
              <li>Soak the #1 towers</li>
              <li>Bait the line AoEs away from the group</li>
              <li>Drop your #3 tower where you just soaked your #1 tower</li>
              <li>Do Dynamo and Chariot, while moving back N to the group</li>
            </ul>
          </li>
        </ol>
        After all the mechanics have been resolved, MT should face the auto attacks away from the N group. Everyone prepare to move out of Drachenlance, which targets a random player, then preposition for enumeration.

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
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=580858020801561&preview=1", "_blank")}>Wyrmhole</button></li>
        </ul>
      </div>

      <TableOfContents sections={sections} />
    </>
  )
}

export default P3;
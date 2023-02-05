import IconGrid from "../components/IconGrid";
import { eIcon } from "../components/Icon";
import Party from "./res/Party";
import TableOfContents from "../components/TableOfContents";
import { useEffect, useState } from "react";

function P1() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".omega-guide > h2")));
  }, []);

  return (
    <>
      <div className="section omega-guide">
        <h1>Phase 1 (Omega)</h1>

        <h2 id="party-organization">Party Organization</h2>
        <ul>
          <li>Designate a priority system for flexing Program Loop and Pantokrator (If a light party has two of the same number)</li>
          <li>Determine party spreads for final mechanic. We opt to use static positions.</li>
        </ul>

        Laser Spreads
        <IconGrid grid={[
          [null, Party.t1, null, Party.t2],
          [null],
          [Party.h1, null, eIcon.MARKER_BOSS, null, Party.h2],
          [Party.m1, null, null, null, Party.m2],
          [null, Party.r1, null, Party.r2]
        ]} />
        <i>Both tanks stack directly north if using invuln</i>

        <h2 id="mechanics">Mechanics</h2>
        <h3>Program Loop</h3>
        For all mechanics (Tower soak, tether grab, tether drop):
        <ul>
          <li>
            If in group 1, start W and go CCW
          </li>
          <li>
            If in group 2, start N and go CW
          </li>
        </ul>
        
        Same-group flexing priority is TMRH.<br /><br />

        Tower soak priority is 1 → 2 → 3 → 4<br />
        Tether soak priority is 3 → 4 → 1 → 2<br /><br />

        At the beginning of the mechanic, everyone stack <strong>south</strong> with #3s in between the stack and the boss to intercept the first tethers.<br />
        South stack should not move until the tethers appear.<br /><br />

        Tethered players should be at max melee range to give everyone else plenty of space.<br />
        If you've already soaked a tower, you can safely stand in subsequent towers without penalty (for uptime purposes)

        <h3>Pantokrator</h3>
        Group 1 takes N<br />
        Group 2 takes S<br />
        If the initial AoEs are directly N and S, rotate rotate CW (G1 W/G2 E)<br /><br />

        Same flex prio as Program Loop (TMRH)<br />
        Groups stack towards the back of the rotation, missiles sprint away from the group when needed.<br /><br />

        <i>Order of mechanics:</i>
        <ul>
          <li>Initial pizza slice (Flexers adjust here)</li>
          <li>Pizza (Determines direction, everyone stack towards the back of the rotation)<br />&nbsp;</li>

          <li>Pizza (#1 immediately move away)</li>
          <li>Puddle</li>
          <li>Puddle (Laser and missile, #1 immediately go back to stack)<br />&nbsp;</li>

          <li>Puddle (#2 immediately move away)</li>
          <li>Puddle</li>
          <li>Puddle (Laser and missile, #2 immediately go back to stack)<br />&nbsp;</li>

          <li>Puddle (#3 immediately move away)</li>
          <li>Puddle</li>
          <li>Puddle (Laser and missile, #3 immediately go back to stack)<br />&nbsp;</li>

          <li>Puddle (#4 immediately move away)</li>
          <li>Puddle</li>
          <li>Puddle (Laser and missile)<br />&nbsp;</li>

          <li>Pizza (Tanks move north out of hitbox, everyone else spread south inside hitbox)</li>
        </ul>
        <i>Note: Pizza slices are two opposing 60° cone AoEs (leaving two 120° safe zones) that rotate 30° at a time</i>

        <h3>Laser Spreads</h3>
        Use static positions from <strong>Party Organization</strong><br /><br />
        The farthest two players (preferably the tanks) take five 120° tank busters.<br />
        Lasers hit three random non-tank players on TB #1 and the other three slightly before TB #5 

        <h2 id="resources">Resources</h2>
        <ul className="toolboxes">
          <li><button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=758088204654761&preview=1", "_blank")}>Toolbox</button></li>
        </ul>
      </div>

      <TableOfContents sections={sections} />
    </>
  )
}

export default P1;
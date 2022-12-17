import YouTube from "./components/Youtube";
import TableOfContents from "./components/TableOfContents";
import IconGrid from "../components/IconGrid"
import { Job } from "../components/JobIcon"
import { useEffect, useState } from "react";

const Videos = [
  "https://www.youtube.com/embed/Pr4AbFgZTA8",
  "https://www.youtube.com/embed/jzTot-FozsA"
];

const Povs = [
  "https://www.youtube.com/embed/rghTpba6wX4"
];

const Diagrams = [
  "https://cdn.discordapp.com/attachments/989311880466169857/1014770778954281010/p8p2cropped.jpg",
  "https://media.discordapp.net/attachments/992596350585819136/1030345834988052490/unknown.png",
  "https://cdn.discordapp.com/attachments/992596350585819136/1032144142370869338/unknown.png",
  "https://media.discordapp.net/attachments/992596350585819136/1032143652857860206/unknown.png",
  "https://media.discordapp.net/attachments/992596350585819136/1032147418445267025/unknown.png"
]

function P8S2() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".abyssos-guide > h2")));
  }, []);
  
  return (
    <>
      <div className="section abyssos-guide">
        <h1>Hephaistos II</h1>
        <h2 id="party-organization">Party Organization</h2>
        <ul>
          <li>Horizontal spreads for Natural Alignment and Limitless Desolation.<br />
            <i>Try to keep healers close to the middle for AoE heals.</i></li>
          <li>Half-room spread positions for Natural Alignment 1 -&gt; spread 2nd</li>
          <li>Have a priority system for Natural Alignment fire/ice baits</li>
          <li>Designate 1 tank and 1 melee DPS to flex for Natural Alignment ice</li>
          <li>Have a priority system for Dominion towers, from left to right</li>
        </ul>
        
        <br/>
        Horizontal Spreads for Natural Alignment<br/>
        <IconGrid grid={[
          [Job.SAM, Job.PLD, Job.WAR, Job.NIN],
          [Job.RDM, Job.SCH, Job.WHM, Job.MCH]
        ]} />

        <br/><br/>
        Melee Flexers for NA Fire/Ice
        <IconGrid grid={[
          [Job.PLD, Job.SAM]
        ]} />

        <br/><br/>
        Horizontal Spreads for Limitless Desolation and Dominion
        <IconGrid grid={[
          [Job.WAR, Job.WHM, Job.SAM, Job.NIN],
          [Job.PLD, Job.SCH, Job.RDM, Job.MCH]
        ]} />
        <i>Dominion tower priority from left to right is THMR</i><br/>

        <br/><br/>
        The rest is shown in the Diagrams section

        <h2 id="timeline">Timeline</h2>
        <ul className="toolboxes">
          <li>
            <button onClick={() => window.open("https://cdn.discordapp.com/attachments/836704939182129203/1024904346992922674/unknown.png", "_blank")}>Open timeline</button>
          </li>
        </ul>

        <h2 id="video-guides">Video Guides</h2>
        <ul className="videos">
          {
            Videos.map((url: string) => {
              return <li key={url}><YouTube src={url}></YouTube></li>
            })
          }
        </ul>

        <h2 id="povs">POVs</h2>
        <ul className="videos">
          {
            Povs.map((url: string) => {
              return <li key={url}><YouTube src={url}></YouTube></li>
            })
          }
        </ul>

        <h2 id="diagrams">Diagrams</h2>
        <ul className="diagrams">
          {
            Diagrams.map((url: string) => {
              return <li key={url}><img src={url} alt="" /></li>
            })
          }
        </ul>

        <h2 id="strategies">Strategies</h2>
        <ul className="toolboxes">
          <li>
            <div>Natural Alignment</div>
            <button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=817372829623661&preview=1", "_blank")}>Toolbox</button>
          </li>
          <li>
            <div>High Concept 1</div>
            <button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=201079692202661&preview=1", "_blank")}>Toolbox</button>
          </li>
          <li>
            <div>High Concept 2</div>
            <button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=694077632802661&preview=1", "_blank")}>Toolbox</button>
          </li>
        </ul>
      </div>

      <TableOfContents sections={sections} />
    </>
  );
}

export default P8S2;
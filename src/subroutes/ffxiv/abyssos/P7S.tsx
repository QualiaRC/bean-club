import YouTube from "./components/Youtube";
import TableOfContents from "./components/TableOfContents";
import { useEffect, useState } from "react";
// import Timeline from "./components/Timeline";

const Videos = [
  "https://www.youtube.com/embed/ALsYpDwW8DU",
  "https://www.youtube.com/embed/DeZ5tTSYLHs"
];

const Povs = [
  "https://www.youtube.com/embed/NSqc16gTWs4",
  "https://www.youtube.com/embed/yBW_HSQWDGs"
];

const Diagrams = [
  "https://cdn.discordapp.com/attachments/836704939182129203/1015765666965491803/unknown.png",
  "https://cdn.discordapp.com/attachments/1014267505583337604/1015273123010072586/unknown.png",
  "https://cdn.discordapp.com/attachments/1014267505583337604/1015679364651819150/unknown.png",
  "https://cdn.discordapp.com/attachments/1014267505583337604/1015692852535242752/unknown.png"
];

function P7S() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".abyssos-guide h2")));
  }, []);

  return (
    <>
      <div className="section abyssos-guide">
        <h1>Agdistis</h1>

        <h2 id="party-organization">Party Organization</h2>
        <ul>
          <li>Specific positions for each DPS and each Support for braindead Purgation (See diagrams)</li>
          <li>TBD</li>
        </ul>

        <h2 id="timeline">Timeline</h2>
        <p>TBD</p>

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
            <div>Purgation Sleepo Strat</div>
            <button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=339073562612661&preview=1#1", "_blank")}>Toolbox</button>
          </li>
          <li>
            <div>Braindead Harvests</div>
            <button onClick={() => window.open("https://raidplan.io/plan/hYx4LJe7jNg8ih2N", "_blank")}>Raidplan</button>
          </li>
        </ul>
      </div>

      <TableOfContents sections={sections} />
    </>
  );
}

export default P7S;
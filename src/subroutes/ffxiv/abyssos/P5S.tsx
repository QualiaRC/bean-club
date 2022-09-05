import Timeline_P5S from "./res/timeline_p5s.json";
import YouTube from "./components/Youtube";
import Timeline from "./components/Timeline";
import { useEffect, useState } from "react";
import TableOfContents from "./components/TableOfContents";

const Videos = [
  "https://www.youtube.com/embed/S8OnaLdARxA",
  "https://www.youtube.com/embed/ogH5TAok5CA"
];

const Diagrams = [
  "https://media.discordapp.net/attachments/1014143717575245874/1014315597628186655/unknown.png",
  "https://media.discordapp.net/attachments/1014143717575245874/1014315655668965396/unknown.png",
  "https://cdn.discordapp.com/attachments/992596350585819136/1014369764434509864/unknown.png"
];

function P5S() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".abyssos-guide > h2")));
  }, []);

  return (
    <>
      <div className="section abyssos-guide">
        <h1>Proto-Carbuncle</h1>

        <h2 id="party-organization">Party Organization</h2>
        <ul>
          <li>Four role-based pairings (Tank, Healer, Melee DPS, Ranged DPS)</li>
          <li>Clock Positions</li>
          <li>Two light parties (Healer, Tank, DPS, DPS)</li>
        </ul>
        <h2 id="timeline">Timeline</h2>
        <Timeline timelineData={Timeline_P5S} />

        <h2 id="video-guides">Video Guides</h2>
        <ul className="videos">
          {
            Videos.map((url: string) => {
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
      </div>

      <TableOfContents sections={sections} />
    </>
  );
}

export default P5S;
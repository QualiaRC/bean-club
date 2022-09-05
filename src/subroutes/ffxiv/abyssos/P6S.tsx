import Timeline_P6S from "./res/timeline_p6s.json";
import YouTube from "./components/Youtube";
import Timeline from "./components/Timeline";
import { useEffect, useState } from "react";
import TableOfContents from "./components/TableOfContents";

const Videos = [
  "https://www.youtube.com/embed/d-eNZwVJI8k",
  "https://www.youtube.com/embed/0BcE5w2JnrM",
  "https://www.youtube.com/embed/LDLfa-2EUWk"
];

const Povs = [
  "https://www.youtube.com/embed/p6vqeAn4Vkc"
];

const Diagrams = [
  "https://cdn.discordapp.com/attachments/1014143717575245874/1014544296709455902/unknown.png",
  "https://media.discordapp.net/attachments/992596350585819136/1014917858498707537/unknown.png",
  "https://media.discordapp.net/attachments/1014267492450967633/1014907934372802611/unknown.png",
  "https://cdn.discordapp.com/attachments/992596350585819136/1014968700216033331/unknown.png"
];

function P6S() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".abyssos-guide > h2")));
  }, []);

  return (
    <>
      <div className="section abyssos-guide">
        <h1>Hegemone</h1>

        <h2 id="party-organization">Party Organization</h2>
        <ul>
          <li>Two light parties (Healer, Tank, DPS, DPS)</li>
          <li>Four pairs of 1x DPS + 1x Tank/Healer</li>
        </ul>

        <h2 id="timeline">Timeline</h2>
        <Timeline timelineData={Timeline_P6S} />

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
            <div>Cachexia #1</div>
            <button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=504966792291661&preview=1", "_blank")}>Toolbox</button>
          </li>
          <li>
            <div>Cachexia #2</div>
            <button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=727967058691661&preview=1", "_blank")}>Toolbox</button>
          </li>
        </ul>
      </div>

      <TableOfContents sections={sections} />
    </>
  );
}

export default P6S;
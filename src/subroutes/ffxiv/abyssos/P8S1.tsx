import YouTube from "./components/Youtube";
import TableOfContents from "./components/TableOfContents";
import { useEffect, useState } from "react";

const Videos = [
  "https://www.youtube.com/embed/3uVG6KOqDX4"
];

const Povs = [
  "https://www.youtube.com/embed/5khBtzhd5B4"
];

const Diagrams = [
  "https://media.discordapp.net/attachments/1014267519210623101/1017644712250851440/unknown.png",
  "https://cdn.discordapp.com/attachments/992596350585819136/1019783225683476490/unknown.png",
  "https://cdn.discordapp.com/attachments/836704939182129203/1017866701896962108/unknown.png",
  "https://cdn.discordapp.com/attachments/992596350585819136/1019809362690179143/unknown.png",
  "https://cdn.discordapp.com/attachments/992596350585819136/1019808045787791400/unknown.png"
];


function P8S1() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".abyssos-guide > h2")));
  }, []);

  return (
    <>
      <div className="section abyssos-guide">
        <h1>Hephaistos</h1>
        <h2 id="party-organization">Party Organization</h2>
        <ul>
          <li>
            Four pairs of 1x DPS + 1x Tank/Healer, with one pair per corner.<br />
            <i>These corners will be relative anchor spots for several mechanics.</i>
          </li>
          <li>Two light parties of THDD, and a priority system for Gorgon 1</li>
          <li>Clock positions</li>
          <li>Designated spread positions for Fourfold</li>
        </ul>

        <h2 id="timeline">Timeline</h2>
        <ul className="toolboxes">
          <li>
            <button onClick={() => window.open("https://cdn.discordapp.com/attachments/992596350585819136/1017907038401069127/unknown.png", "_blank")}>Open timeline</button>
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
            <div>Entire encounter starting from 1st reflection</div>
            <button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=406179423332661&preview=1", "_blank")}>Toolbox</button>
          </li>
          <li>
            <div>Spriggan Gorgon 2</div>
            <button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=865178265232661&preview=1", "_blank")}>Toolbox</button>
            <button onClick={() => window.open("https://ff14.toolboxgaming.space/?id=585170798232661&preview=1", "_blank")}>Another Toolbox</button>

          </li>
        </ul>
      </div>

      <TableOfContents sections={sections} />
    </>
  );
}

export default P8S1;
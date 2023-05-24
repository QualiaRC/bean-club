
import YouTube from "../components/Youtube";
import Timeline from "../components/Timeline";
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
          <li></li>
        </ul>
        <h2 id="timeline">Timeline</h2>
        {/* <Timeline timelineData={null} /> */}

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

export default P9S;
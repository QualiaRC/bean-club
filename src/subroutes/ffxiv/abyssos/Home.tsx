import { useState } from "react";
import IconGrid from "../components/IconGrid"
import { Job } from "../components/JobIcon"

function Home() {
  const [valid, setValid] = useState(false);
  const validate = (state: any) => {
    if (state.target.value === "deez nuts") {
      setValid(true);
    }
  }

  const openUrl = (url: string) => {
    window.open(url, "_blank");
  }
  
  return (
    <div className="encounter-home section">
      <h1>Abyssos (Savage)</h1>
      <p>Select a resource from the encounter banner, or view miscellaneous static resources below.</p>

      <h2>Static Organization</h2>
      {
        valid ? <ul className="hyperlink-list">
          <li><button onClick={() => openUrl("https://docs.google.com/spreadsheets/d/1-jwpPz1x7VYUdJKqL4Mu4PtmVuV_Q2NAmCFQU3dCpBI/edit?usp=sharing")}>Loot Planner</button></li>
          <li><button onClick={() => openUrl("https://docs.google.com/spreadsheets/d/1pYfJTpoGDFJAwZa0gCueR6YP1FGynfGT7Vu2z2jNHC4/edit?usp=sharing")}>Mitigation</button></li>
        </ul> : <div>Password: <input type="password" onChange={validate} style={{ "fontSize": "1em" }}></input></div>
      }

      <h2>General-Purpose Positions</h2>
      Clock Positions<br/><br/>
      <IconGrid grid={[
        ['', '', Job.WAR, '', ''],
        ['', Job.RDM, '', Job.MCH, ''],
        [Job.SCH, '', '', '', Job.WHM],
        ['', Job.SAM, '', Job.NIN, ''],
        ['', '', Job.PLD, '', ''],
      ]} />
      <br/><br/>
      Vertical Spreads<br/><br/>
      <IconGrid grid={[
        [Job.WAR, '', Job.PLD],
        [Job.RDM, '', Job.MCH],
        [Job.SCH, '', Job.WHM],
        [Job.SAM, '', Job.NIN]
      ]} />
      <br/><br/>
      Horizontal Spreads<br/><br/>
      <IconGrid grid={[
        [Job.RDM, Job.SCH, Job.SAM, Job.WAR, '', Job.PLD, Job.NIN, Job.WHM, Job.MCH]
      ]} />
    </div>
  )
}

export default Home;
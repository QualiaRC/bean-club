import { useState } from "react";
import IconGrid from "../components/IconGrid";
import { eIcon } from "../components/Icon";
import Party from "./res/Party";

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
      <h1>Anabaseios (Savage)</h1>
      <p>Select a resource from the encounter banner, or view miscellaneous static resources below.</p>

      <h2>Static Organization</h2>
      {
        valid ? <ul className="hyperlink-list">
          <li><button onClick={() => openUrl("")}>Loot Planner</button></li>
          <li><button onClick={() => openUrl("")}>Mitigation</button></li>
        </ul> : <div>Password: <input type="password" onChange={validate} style={{ "fontSize": "1em" }}></input></div>
      }

      <h2>General-Purpose Positions</h2>
      <p>Light Parties</p>
      <ol>
        <li>
          <IconGrid grid={[[Party.t1, Party.h1, Party.m1, Party.r1]]} />
        </li>
        <li>
          <IconGrid grid={[[Party.t2, Party.h2, Party.m2, Party.r2]]} />
        </li>
      </ol>

      <p>Clock Positions</p>
      <IconGrid grid={[
        ['', '', Party.t1, '', ''],
        ['', Party.r1, '', Party.r2, ''],
        [Party.h1, '', '', '', Party.h2],
        ['', Party.m1, '', Party.m2, ''],
        ['', '', Party.t2, '', ''],
      ]} />
      <br/><br/>

      
    </div>
  )
}

export default Home;
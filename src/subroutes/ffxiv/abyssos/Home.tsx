import { useState } from "react";
import StaticPositions from "./res/img/static_pos.png";

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
      <img src={StaticPositions} alt="Static Positions" />
    </div>
  )
}

export default Home;
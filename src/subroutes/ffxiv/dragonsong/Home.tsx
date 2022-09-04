import { useState } from "react";

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
      <h1>Dragonsong's Reprise (Ultimate)</h1>
      <p>I hate this fight</p>

      <h2>Static Organization</h2>
      {
        valid ? <ul className="hyperlink-list">
          <li><button onClick={() => openUrl("https://docs.google.com/spreadsheets/d/1r9IclfHnD-FKRxTf7WlqcKplTSiwseTJK9gN_-6-6cI/edit?usp=sharing")}>Mitigation</button></li>
        </ul> : <div>Password: <input type="password" onChange={validate} style={{ "fontSize": "1em" }}></input></div>
      }
    </div>
  )
}

export default Home;
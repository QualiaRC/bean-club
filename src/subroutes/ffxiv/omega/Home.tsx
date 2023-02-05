import IconGrid from "../components/IconGrid";
import Party from "./res/Party";

function Home() {

  return (
    <div className="encounter-home section">
      <h1>The Omega Protocol (Ultimate)</h1>
      <p>Select a resource from the encounter banner, or view miscellaneous static resources below.</p>

      <h2>Static Organization</h2>
      <p>Light Parties</p>
      <ol>
        <li>
          <IconGrid grid={[[Party.t1, Party.h1, Party.m1, Party.r1]]} />
        </li>
        <li>
          <IconGrid grid={[[Party.t2, Party.h2, Party.m2, Party.r2]]} />
        </li>
      </ol>
    </div>
  )
}

export default Home;
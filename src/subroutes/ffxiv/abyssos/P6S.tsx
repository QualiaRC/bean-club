import YouTube from "./components/Youtube";
// import Timeline from "./components/Timeline";

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
  return (
    <div className="section abyssos-guide">
      <h1>Hegemone</h1>
      <h2>Party Organization</h2>
      <ul>
        <li>Two light parties (Healer, Tank, DPS, DPS)</li>
        <li>Four role-based pairings, one per arena row (Ranged DPS, Tank, Melee DPS, Healer)</li>
      </ul>
      <h2>Timeline</h2>
      <p>WIP</p>
      <h2>Video Guides</h2>
      <ul className="videos">
        {
          Videos.map((url: string) => {
            return <li key={url}><YouTube src={url}></YouTube></li>
          })
        }
      </ul>
      <h2>POVs</h2>
      <ul className="videos">
        {
          Povs.map((url: string) => {
            return <li key={url}><YouTube src={url}></YouTube></li>
          })
        }
      </ul>
      <h2>Diagrams</h2>
      <ul className="diagrams">
        {
          Diagrams.map((url: string) => {
            return <li key={url}><img src={url} alt="" /></li>
          })
        }
      </ul>
    </div>
  );
}

export default P6S;
import YouTube from "./components/Youtube";
// import Timeline from "./components/Timeline";

const Videos = [
  "https://www.youtube.com/embed/xI1mfa_sMck",
  "https://www.youtube.com/embed/DeZ5tTSYLHs"
];

const Povs = [
  "https://www.youtube.com/embed/NSqc16gTWs4",
  "https://www.youtube.com/embed/yBW_HSQWDGs"
];

const Diagrams = [
  "https://cdn.discordapp.com/attachments/836704939182129203/1015765666965491803/unknown.png",
  "https://cdn.discordapp.com/attachments/1014267505583337604/1015273123010072586/unknown.png",
  "https://cdn.discordapp.com/attachments/1014267505583337604/1015679364651819150/unknown.png",
  "https://cdn.discordapp.com/attachments/1014267505583337604/1015692852535242752/unknown.png"
];

function P7S() {
  return (
    <div className="section abyssos-guide">
      <h1>Agdistis</h1>
      <h2>Party Organization</h2>
      <ul>
        <li>Specific positions for each DPS and each Support for braindead Purgation (See diagrams)</li>
        <li>TBD</li>
      </ul>
      <h2>Timeline</h2>
      <p>TBD</p>
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

export default P7S;
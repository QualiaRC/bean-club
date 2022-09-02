function Guide(props: any) {
  const data = props.data;

  return (
    <div className="section abyssos-guide">
      <h1>{data.title}</h1>
      {
        data.textGuides?.length ?
          <>
            <h2>Text Guides</h2>
            <ul className="hyperlink-list">
              {
                data.textGuides.map((guide: any, idx: number) => {
                  return <li key={`${data.title}-tg-${idx}`}><button onClick={() => window.open(guide.url, "_blank")}>{guide.label}</button></li>
                })
              }
            </ul>
          </>
          : null
      }

      {
        data.videoGuides?.length ?
          <>
            <h2>Video Guides</h2>
            <ul className="videos">
              {
                data.videoGuides.map((url: string, idx: number) => {
                  return <li key={`${data.title}-vg-${idx}`}><YouTube src={url} /></li>
                })
              }
            </ul>
          </>
          : null
      }

      {
        data.povs?.length ?
          <>
            <h2>POVs</h2>
            <ul className="videos">
              {
                data.povs.map((url: string, idx: number) => {
                  return <li key={`${data.title}-pov-${idx}`}><YouTube src={url} /></li>
                })
              }
            </ul>
          </>
          : null
      }

      {
        data.diagrams?.length ?
          <>
            <h2>Diagrams</h2>
            <ul className="diagrams">
              {
                data.diagrams.map((diagram: any, idx: number) => {
                  return <li key={`${data.title}-diag-${idx}`}><img src={diagram.src} /></li>
                })
              }
            </ul>
          </>
          : null
      }

      {
        data.toolboxes?.length ?
          <>
            <h2>Toolboxes</h2>
            <ul className="toolboxes">
              {
                data.toolboxes.map((toolbox: any, idx: number) => {
                  return <li key={`${data.title}-tbx-${idx}`}>
                    {toolbox.title}<br />
                    <button onClick={() => window.open(toolbox.url, "_blank")}>Toolbox</button>
                  </li>
                })
              }
            </ul>
          </>
          : null
      }
    </div>
  )
}

function YouTube(props: any) {
  return (
      <iframe 
          width="560" 
          height="315" 
          src={props.src} 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen />
  )
}

export default Guide;
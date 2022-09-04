import { useState } from "react";

function Timeline(props: any) {
  const [mechanic, setMechanic] = useState({
    name: "Mechanic Name",
    type: "Mechanic Type",
    description: ["Hover over a mechanic to display its description."]
  });

  const hoverMechanic = (name: string, type: string, description: string[]) => {
    setMechanic({ name, type, description });
  }

  return (
    <div className="timeline-container">
      <div className="timeline">
        <ul>
          {
            props.timelineData.timeline.map((mechanic: any, index: number) => {
              return <li key={`mechanic-${index}`} onMouseEnter={() => { hoverMechanic(mechanic.name, mechanic.type, mechanic.description) }}>
                <div className="timeline-mechanic">
                  {mechanic.name}
                </div>
                {
                  mechanic.children ?
                    <ul>
                      {
                        mechanic.children.map((name: string, subIndex: number) => {
                          return <li key={`mechanic-${index}-${subIndex}`}>{name}</li>
                        })
                      }
                    </ul> : null
                }
              </li>
            })
          }
        </ul>
      </div>
      <div className="mechanic-description">
        <h2>{mechanic.name} <br /><span className="mechanic-type">{mechanic.type}</span></h2>
        {
          mechanic.description.map((section: string, index: number) => {
            return <p key={`${mechanic.name}-${index}`}>{section}</p>
          })
        }
      </div>
    </div>
  )
}

export default Timeline;
import { CSSProperties, useLayoutEffect, useState } from "react";

let[screenX, screenY] = [window.innerWidth, window.innerHeight];
window.addEventListener("resize", () => {
  [screenX, screenY] = [window.innerWidth, window.innerHeight];
});

class SnowParticle {
  x: number;
  y: number;
  depth: number;
  
  constructor(depth: number, y: number) {
    this.y = y;
    this.x = Math.random() * screenX * 2 - screenX;
    this.depth = depth;
  }
  
  update() {
    if(this.y > screenY) {
      return snowSet.delete(this);
    }
    
    this.y += this.depth / 3;
    this.x += Math.sin(this.y / 1000) * this.depth / 4;
  }
}
const snowSet = new Set<SnowParticle>();

const canvasStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 999999,
  pointerEvents: "none",
  filter: "blur(1px)"
} as CSSProperties;

for(let i = 0; i < 2000; i++) {
  snowSet.add(new SnowParticle(Math.random() * 3 + 1, Math.random() * screenY));
}

function Snow() {
  const [enabled, setEnabled] = useState(true);

  useLayoutEffect(() => {
    if(!enabled) return;
    const canvas = document.getElementById("snow") as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    
    let timerId: number;
    
    const updateSnow = () => {
      canvas.width = screenX;
      canvas.height = screenY;
      
      if(context == null) return;
      context.fillStyle = "white";
      context.clearRect(0, 0, screenX, screenY);
      
      if(snowSet.size < 2000) {
        for(let i = 0; i < 3; i++) {
          snowSet.add(new SnowParticle(Math.random() * 3 + 1, -10));
        }
      }

      snowSet.forEach((particle: SnowParticle) => {
        particle.update()
        context.fillRect(particle.x, particle.y, 2, 2);
      });
      
      timerId = requestAnimationFrame(updateSnow);
    }

    timerId = requestAnimationFrame(updateSnow);

    return () => cancelAnimationFrame(timerId);
  }, [enabled]);

  function toggleEnabled() {
    setEnabled(!enabled);
  }

  return (
    <div style={{display:"flex",alignItems:"center",marginLeft:"auto",marginRight:"0.5em"}}>
      <div style={{fontSize: "32px",marginTop:"-4px"}}>❄️</div>
      <label className="switch">
        <input type="checkbox" defaultChecked onClick={toggleEnabled}/>
        <span className="slider round"></span>
      </label>
      {enabled ? <canvas id="snow" style={canvasStyle} /> : null}
    </div>
  )
}

export default Snow;
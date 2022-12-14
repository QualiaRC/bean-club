import { CSSProperties, useLayoutEffect, useState } from "react";
import SnowParticles from "./SnowParticles";

let[screenX, screenY] = [window.innerWidth, window.innerHeight];
window.addEventListener("resize", () => {
  [screenX, screenY] = [window.innerWidth, window.innerHeight];
  SnowParticles.updateScreenDimensions(screenX, screenY);
});

const canvasStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  pointerEvents: "none",
  zIndex: 2
} as CSSProperties;

function Snow(props: any) {

  useLayoutEffect(() => {
    if(!props.enabled) return;
    const canvas = document.getElementById("snow") as HTMLCanvasElement;
    const context = canvas.getContext("2d");

    let timerId: number;
    
    const updateSnow = () => {
      canvas.width = screenX;
      canvas.height = screenY;
      
      if(context == null) return;
      context.fillStyle = "white";
      
      SnowParticles.addParticles(() => [-10, Math.random() * 3 + 1], 3);
      SnowParticles.updateAndDrawParticles(context);
      
      timerId = requestAnimationFrame(updateSnow);
    }

    timerId = requestAnimationFrame(updateSnow);

    return () => cancelAnimationFrame(timerId);
  }, [props.enabled]);

  return (
    <>{props.enabled ? <canvas id="snow" style={canvasStyle} /> : null}</>
  )
}

export default Snow;
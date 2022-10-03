import "./Certified.css";
import template from "./template.png";
import { useEffect, useState } from "react";

function Certified() {
  let canvas: any = null;
  let ctx: any = null;
  let img: any = null;

  const [text, setText] = useState("bean club");

  useEffect(() => {
    canvas = document.getElementById("c") as HTMLCanvasElement;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.font = "bold 42px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#81703A"

    img = new Image();
    img.src = template;
    img.onload = () => update(text);
  }, [text]);


  const update = (t: string) => {
    setText(t);
    if (!ctx) return;
    ctx.clearRect(0, 0, 512, 512);
    ctx.drawImage(img, 0, 0);
    ctx.fillText(text, 256, 261);
    document.title = `Certified ${text} Moment`;
  }

  const inputUpdate = (e: any) => update(e.target.value);

  const save = (e: any) => {
    e.target.download = `certified_${text}_moment.png`;
    e.target.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  }

  let to: NodeJS.Timeout;
  const copy = (e: any) => {
    if (to) clearTimeout(to);
    canvas.toBlob((blob: any) => { navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]) });
    e.target.text = "Copied!";
    to = setTimeout(() => e.target.text = "Copy", 1000);
  }

  const contextMenu = (e: any) => {
    e.preventDefault();
  }

  return (
    <div className="d">
      <canvas id="c" width="512" height="512" onContextMenu={contextMenu} /><br />
      <input type="text" value={text} onInput={inputUpdate} /><br />
      <div>
        <a className="b" onClick={save}>Save</a>
        <a className="b" onClick={copy}>Copy</a>
      </div>
    </div>
  );
}

export default Certified;
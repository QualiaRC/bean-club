import "./Dema.css";
import templateTransparent from "./demasign.png";
import templateWhite from "./demasignwhite.png";
import { useEffect, useState, useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

const templates = {
  demaTransparent: new Image(),
  demaWhite: new Image()
}
templates.demaTransparent.src = templateTransparent;
templates.demaWhite.src = templateWhite;

function Dema() {
  const [mode, setMode] = useState("text");
  const [expandedParameters, setExpandedParameters] = useState(false);
  const [highContrastText, setHighContrastText] = useState(false);
  const [text, setText] = useState("I really\nlove beans!");
  const [fontSize, setFontSize] = useState(36);
  const [textPosition, setTextPosition] = useState([175, 220]);
  const [lineHeight, setLineHeight] = useState(1);
  const [croppedBackground, setCroppedBackground] = useState(new Image());
  const [showModal, setShowModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState("");
  const cropperRef = useRef<ReactCropperElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "#ccc";
  }, []);


  // Render main canvas
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (!ctx) return;
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.fillStyle = highContrastText ? "white" : "black";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.clearRect(0, 0, 300, 300);

    // Draw whatever background exists
    //  but draw a base Dema first
    if (croppedBackground.src) {
      ctx.drawImage(templates.demaWhite, 0, 0);

      ctx.save();
      ctx.rotate(Math.PI * 0.059);
      ctx.drawImage(croppedBackground, 53, 140, 243, 136);
      ctx.restore();
    }

    // Draw the Dema
    ctx.drawImage(croppedBackground.src ? templates.demaTransparent : templates.demaWhite, 0, 0);

    // Draw the text
    ctx.save();
    ctx.rotate(Math.PI * 0.059);
    const lines = text.split('\n');
    let y = textPosition[1] - (lines.length - 1) * (fontSize * lineHeight / 2);
    for (const line of lines) {
      if (highContrastText) ctx.strokeText(line, textPosition[0], y);

      ctx.fillText(line, textPosition[0], y);
      y += fontSize * lineHeight;
    }
    ctx.restore();

  }, [text, fontSize, textPosition, lineHeight, croppedBackground, highContrastText]);


  const save = () => {
    const download = document.createElement("a");
    download.download = `dema.png`;
    download.href = canvasRef.current?.toDataURL("image/png").replace("image/png", "image/octet-stream") || "";
    download.click();
    download.remove();
  }


  let to: NodeJS.Timeout;
  const copy = (e: any) => {
    if (to) clearTimeout(to);
    canvasRef.current?.toBlob((blob: any) => { navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]) });
    e.target.innerText = "Copied!";
    to = setTimeout(() => e.target.innerText = "Copy", 1000);
  }


  const upload = () => {
    const uploader = document.createElement("input");
    uploader.setAttribute("type", "file");
    uploader.setAttribute("accept", "image/png, image/jpeg");
    uploader.addEventListener("change", function (e) {
      if (!this.files?.length) return;

      const fr = new FileReader()
      fr.onload = function () {
        setUploadedImage((fr.result || "").toString());
        setShowModal(true);
      }

      fr.readAsDataURL(this.files[0]);
    });

    uploader.click();
  }


  const finalizeCrop = () => {
    const img = new Image();
    img.src = cropperRef.current?.cropper.getCroppedCanvas().toDataURL() || "";
    setCroppedBackground(img);
    setShowModal(false);
  }


  return (
    <>
      <div className="dema-container">
        <canvas id="dema-canvas" width="300" height="300" ref={canvasRef} onContextMenu={(e: any) => { e.preventDefault() }} style={{ background: `url(${templateWhite})` }} />

        <div>
          <button className="dema-button" onClick={save}>Save</button>
          <button className="dema-button" onClick={copy}>Copy</button>
        </div>

        <div className="dema-setting-change">
          <button onClick={() => setMode("text")} data-active={mode === "text"}>Text</button>
          <button onClick={() => setMode("image")} data-active={mode === "image"}>Image</button>
        </div>
        <div className="dema-parameters">
          {
            mode === "text" ?
              <>
                <div>
                  Text:
                  <textarea className="dema-input" value={text} onInput={(e: any) => { setText(e.target.value) }} />
                </div>

                <div className="dema-expanded-parameters" data-active={expandedParameters}>
                  <div>
                    Font Size:
                    <input className="dema-input" type="range" min="4" max="128" value={fontSize} onInput={(e: any) => { setFontSize(e.target.value) }} />
                  </div>

                  <div>
                    Text position:
                    <div className="dema-slider-container">
                      <span>X</span><input type="range" min="0" max="300" value={textPosition[0]} className="dema-input" onChange={(e: any) => { setTextPosition([e.target.value, textPosition[1]]) }} />
                    </div>
                    <div className="dema-slider-container">
                      <span>Y</span><input type="range" min="0" max="300" value={textPosition[1]} className="dema-input" onChange={(e: any) => { setTextPosition([textPosition[0], e.target.value]) }} />
                    </div>
                  </div>

                  <div>
                    Line height:
                    <input className="dema-input" type="range" min="0.2" max="5" step="0.05" value={lineHeight} onChange={(e: any) => { setLineHeight(e.target.value) }} />
                  </div>

                  <div className="dema-checkbox">
                    <input type="checkbox" checked={highContrastText} onChange={() => { setHighContrastText(!highContrastText) }} />
                    High contrast text
                  </div>
                </div>

                <div className="dema-expand-parameters" data-active={expandedParameters} onClick={() => { setExpandedParameters(!expandedParameters) }}>
                  <div>{expandedParameters ? "Less" : "More"}</div>
                </div>

              </> : <></>
          }
          {
            mode === "image" ?
              <div className="dema-crop-buttons">
                <button className="dema-button" onClick={upload}>Upload</button>
                <button className="dema-button" onClick={() => { setCroppedBackground(new Image()) }}>Clear</button>
              </div> : <></>
          }
        </div>
      </div>

      <div id="dema-upload-modal" hidden={!showModal}>
        <Cropper src={uploadedImage} style={{ height: "400px", width: "100%" }} aspectRatio={243 / 136} ref={cropperRef} />
        <div>
          <button className="dema-button" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="dema-button" onClick={finalizeCrop}>Upload</button>
        </div>
      </div>

    </>
  )
}

export default Dema;
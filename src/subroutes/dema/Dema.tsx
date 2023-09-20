import "./Dema.css";
import template from "./demasignwhite.png";
import { useEffect, useState } from "react";

function Dema() {
    let canvas: HTMLCanvasElement;
    let ctx: any = null;
    let img: any = null;

    const [text, setText] = useState("I really\nlove beans!");
    const [fontSize, setFontSize] = useState(36);
    const [textPosition, setTextPosition] = useState([175, 220]);
    const [lineHeight, setLineHeight] = useState(1);

    useEffect(() => {
        document.body.style.backgroundColor = "#1e1e1e";
        document.body.style.color = "#ccc";
    });

    useEffect(() => {
        canvas = document.getElementById("dema-canvas") as HTMLCanvasElement;
        ctx = canvas.getContext("2d");

        if (!ctx) return;
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.textAlign = "center";
        ctx.fillStyle = "black"

        img = new Image();
        img.src = template;
        img.onload = () => update(text);
    }, [text, fontSize, textPosition, lineHeight]);

    const update = (t: string) => {
        setText(t);
        if (!ctx) return;
        ctx.clearRect(0, 0, 300, 300);
        ctx.drawImage(img, 0, 0);

        ctx.save();
        ctx.rotate(Math.PI * 0.058);

        const lines = t.split('\n');

        let y = textPosition[1] - (lines.length - 1) * (fontSize * lineHeight / 2);
        for (const line of lines) {
            ctx.fillText(line, textPosition[0], y);
            y += fontSize * lineHeight;
        }
        ctx.restore();
    }

    const updateFontSize = (n: number) => {
        setFontSize(n);
        update(text);
    }

    const updatePosition = (x: number, y: number) => {
        setTextPosition([x, y]);
        update(text);
    }

    const updateLineHeight = (n: number) => {
        setLineHeight(n);
        update(text);
    }

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

    return (
        <div className="dema-container">
            <canvas id="dema-canvas" width="300" height="300" onContextMenu={(e: any) => { e.preventDefault() }} />

            <div className="dema-parameters">
                <div>
                    Text:<br />
                    <textarea className="dema-input" value={text} onInput={(e: any) => { update(e.target.value) }} />
                </div>
                
                <div>
                    Font Size:<br />
                    <input className="dema-input" type="range" min="4" max="128" value={fontSize} onInput={(e: any) => { updateFontSize(e.target.value) }} />
                </div>

                <div>
                    Text position:<br />
                    <div className="dema-slider-container">
                        <span>X</span><input type="range" min="0" max="300" value={textPosition[0]} onChange={(e: any) => { updatePosition(e.target.value, textPosition[1]) }} /><br />
                    </div>
                    <div className="dema-slider-container">
                        <span>Y</span><input type="range" min="0" max="300" value={textPosition[1]} onChange={(e: any) => { updatePosition(textPosition[0], e.target.value) }} /><br />
                    </div>
                </div>

                <div>
                    Line height:<br />
                    <input className="dema-input" type="range" min="0.2" max="5" step="0.1" value={lineHeight} onChange={(e: any) => { updateLineHeight(e.target.value) }} />
                </div>
            </div>

            <div>
                <button className="dema-button" onClick={save}>Save</button>
                <button className="dema-button" onClick={copy}>Copy</button>
            </div>
        </div>
    )
}

export default Dema;
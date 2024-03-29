import ImgRat from "./rat.gif";
import { useEffect, useState } from 'react';
import './Rats.css';

function Rats() {
  const ratSize = [100, 50, 50, 25, 25, 12.5, 12.5, 6.25, 6.25, 3.125, 3.125, 1.5625, 1.5625];
  const numbers = ["one", "two", "four", "eight", "sixteen", "thirty two", "sixty four", "one hundred twenty eight", "two hundrd fifty six", "five hundred twelve", "one thousand twenty four", "two thousand forty eight", "four thousand ninety six"];
  const [numRats, setRats] = useState(0);

  const [dimensions, setDimensions] = useState(Math.min(window.innerHeight, window.innerWidth));

  useEffect(() => {
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "#ccc";

    function handleResize() {
      setDimensions(Math.min(window.innerHeight, window.innerWidth));
    }

    window.addEventListener('resize', handleResize);


    return () => { window.removeEventListener('resize', handleResize) }
  });

  return (
    <div style={{margin: 'auto', width: 'fit-content'}}>
      <div className="rat-container" style={{width: `calc(${dimensions-5}px - 4em)`, height: `calc(${dimensions-5}px - 4em)`}}>
      {[...Array(2 ** numRats).keys()].map((_, i) => {
          return (
            <div className="rat-element-container" key={`rat-${i}`} style={{flexBasis: `${ratSize[numRats]}%`, height: `${ratSize[numRats]}%`}}>
              <div className="rat-label" style={{fontSize: `${dimensions / 30 * ratSize[numRats] / 100}px`}}>
                {`${numbers[numRats]} rat${numRats === 0 ? '' : 's'}`}
              </div>
              <div className="rat-element" style={{backgroundImage: `url(${ImgRat})`}}></div>
            </div>
          )
        })}
      </div>
      <input type="range" min="0" max="12" value={numRats} onChange={(e) => setRats(Number(e.target.value))} className="rats" id="input-rats"/> 
    </div>
  );
}

export default Rats;
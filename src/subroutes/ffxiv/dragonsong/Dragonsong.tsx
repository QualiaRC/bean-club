import { useEffect } from "react";

function Dragonsong() {
  useEffect(() => {
    document.title = "Bean Club| FFXIV - Dragonsong's Reprise (Ultimate)";
  }, []);
  return (
    <div>{Array(500).join("A")}</div>
  )
}

export default Dragonsong;
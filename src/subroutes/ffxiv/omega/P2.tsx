import IconGrid from "../components/IconGrid";
import { eIcon } from "../components/Icon";
import TableOfContents from "../components/TableOfContents";
import { useEffect, useState } from "react";

function P2() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".omega-guide > h2")));
  }, []);

  return (
    <>
      <div className="section omega-guide">
        <h1>Phase 2 (Omega-F and Omega-M)</h1>
        
      </div>
      
      <TableOfContents sections={sections} />
    </>
  )
}

export default P2;
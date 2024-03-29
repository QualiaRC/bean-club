import IconGrid from "../components/IconGrid";
import { eIcon } from "../components/Icon";
import TableOfContents from "../components/TableOfContents";
import { useEffect, useState } from "react";

function P3() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".omega-guide > h2")));
  }, []);

  return (
    <>
      <div className="section omega-guide">
        <h1>Phase 3 (Omega Reconfigured)</h1>
        
      </div>
      
      <TableOfContents sections={sections} />
    </>
  )
}

export default P3;
import { useEffect, useState } from "react";

function TableOfContents(props: any) {
  const [bolded, setBolded] = useState(null);
  const [isMobile, setMobile] = useState(window.innerWidth < 800);
  const [showMobileToc, setMobileToc] = useState(false);

  const scrollTo = (id: string) => {
    const dims = document.querySelector(`#${id}`)?.getBoundingClientRect();
    window.scrollTo(window.scrollX, dims ? dims.top - 40 + window.scrollY : window.scrollY);
  }

  const handleScroll = () => {
    const currentY = window.scrollY;
    let currentSection = props.sections[0];
    props.sections.forEach((element: HTMLElement) => {
      if (currentY > element.getBoundingClientRect().top - 150 + currentY) {
        currentSection = element;
      }
    });
    if (window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight) currentSection = props.sections[props.sections.length - 1];
    setBolded(currentSection);
  }
  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleResize = () => {
    setMobile(window.innerWidth < 800);
  }
  useEffect(() => {
    window.removeEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  const toggleMobileToc = () => {
    setMobileToc(!showMobileToc);
  }

  return (
    <>
      {isMobile ? <div className="mobile-toc-toggle" onClick={toggleMobileToc}></div> : <></>}
      {!isMobile || showMobileToc ?
        <>
          { showMobileToc ? <div className="close-region" onClick={toggleMobileToc}></div> : null }
          <div className={`table-of-contents section ${isMobile ? "toc-mobile" : ""}`}>
            <h1>Table of Contents</h1>
            <ul>
              {
                props.sections.map((element: HTMLElement) => {
                  return <li data-current={bolded === element} key={element.id} onClick={() => scrollTo(element.id)}>{element.innerText}</li>
                })
              }
            </ul>
            <div className="top" title="Return to top of page" onClick={() => window.scrollTo(window.scrollX, 0)}>^</div>
          </div>
        </> :
        null}
    </>
  )
}

export default TableOfContents;
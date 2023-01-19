import { Routes, Route, Link, Outlet, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
import Banner from "./res/img/bg-dragonsong.png";
import ImgP1 from "./res/img/p1.png";
import ImgP2 from "./res/img/p2.png";
import ImgP3 from "./res/img/p3.png";
import ImgP4 from "./res/img/p4.png";
import ImgP5 from "./res/img/p5.png";
import ImgP6 from "./res/img/p6.png";
import ImgP7 from "./res/img/p7.png";

import P1 from "./P1";
import P2 from "./P2";
import P3 from "./P3";

function Dragonsong() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/p1" element={ <P1 /> } />
        <Route path="/p2" element={ <P2 /> } />
        <Route path="/p3" element={ <P3 /> } />
        <Route path="/p4" element={ null } />
        <Route path="/p5" element={ null } />
        <Route path="/p6" element={ null } />
        <Route path="/p7" element={ null } />
        <Route path="*" element={<Navigate to="/ffxiv/dragonsong" replace />} />
      </Route>
    </Routes>
  )
}


function Layout() {
  const pathname = useLocation().pathname;
  const path = pathname.slice(pathname.lastIndexOf("/") + 1);

  return (
    <>
      <header className="encounter-header" style={{backgroundImage: `url("${Banner}")`}}>
        <nav className="encounter-navigation dragonsong">
          <Link to="./p1"><div className="boss-button" data-active={path === "p1" ? "" : undefined} data-label="P1" style={{ backgroundImage: `url(${ImgP1})` }}></div></Link>
          <Link to="./p2"><div className="boss-button" data-active={path === "p2" ? "" : undefined} data-label="P2" style={{ backgroundImage: `url(${ImgP2})` }}></div></Link>
          <Link to="./p3"><div className="boss-button" data-active={path === "p3" ? "" : undefined} data-label="P3" style={{ backgroundImage: `url(${ImgP3})` }}></div></Link>
          <Link to="./p4"><div className="boss-button" data-active={path === "p4" ? "" : undefined} data-label="P4" style={{ backgroundImage: `url(${ImgP4})` }}></div></Link>
          <Link to="./p5"><div className="boss-button" data-active={path === "p5" ? "" : undefined} data-label="P5" style={{ backgroundImage: `url(${ImgP5})` }}></div></Link>
          <Link to="./p6"><div className="boss-button" data-active={path === "p6" ? "" : undefined} data-label="P6" style={{ backgroundImage: `url(${ImgP6})` }}></div></Link>
          <Link to="./p7"><div className="boss-button" data-active={path === "p7" ? "" : undefined} data-label="P7" style={{ backgroundImage: `url(${ImgP7})` }}></div></Link>
        </nav>
      </header>
      <div className="page-dragonsong">
        <Outlet />
      </div>
    </>
  )
}

export default Dragonsong;
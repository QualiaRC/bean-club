import { Routes, Route, Link, Outlet, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
import Banner from "./res/img/bg-omega.png";
import ImgP1 from "./res/img/p1.png";
import ImgP2 from "./res/img/p2.png";
import ImgP3 from "./res/img/p3.png";

import P1 from "./P1";
import P2 from "./P2";
import P3 from "./P3";

function Omega() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/p1" element={ <P1 /> } />
        <Route path="/p2" element={ <P2 /> } />
        <Route path="/p3" element={ <P3 /> } />
        <Route path="*" element={<Navigate to="/ffxiv/omega" replace />} />
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
        <nav className="encounter-navigation omega">
          <Link to="./p1"><div className="boss-button" data-active={path === "p1" ? "" : undefined} data-label="P1" style={{ backgroundImage: `url(${ImgP1})` }}></div></Link>
          <Link to="./p2"><div className="boss-button" data-active={path === "p2" ? "" : undefined} data-label="P2" style={{ backgroundImage: `url(${ImgP2})` }}></div></Link>
          <Link to="./p3"><div className="boss-button" data-active={path === "p3" ? "" : undefined} data-label="P3" style={{ backgroundImage: `url(${ImgP3})` }}></div></Link>
        </nav>
      </header>
      <div className="page-omega">
        <Outlet />
      </div>
    </>
  )
}

export default Omega;
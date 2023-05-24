import { Routes, Route, Link, Outlet, Navigate, useLocation } from "react-router-dom";

import Home from "./Home";
import ImgP9 from "./res/img/p9.jpg";
import ImgP10 from "./res/img/p10.jpg";
import ImgP11 from "./res/img/p11.jpg";
import ImgP12_1 from "./res/img/p12-1.jpg";
import Banner from "./res/img/bg-anabaseios.png";

import P9S from "./P9S";
import P10S from "./P10S";
import P11S from "./P11S";
import P12S1 from "./P12S1";

function Anabaseios() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/p9s" element={<P9S />} />
        <Route path="/p10s" element={<P10S />} />
        <Route path="/p11s" element={<P11S />} />
        <Route path="/p12s-part-1" element={<P12S1 />} />
        <Route path="*" element={<Navigate to="/ffxiv/anabaseios" replace />} />
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
        <nav className="encounter-navigation">
          <Link to="./p9s"><div className="boss-button" data-active={path === "p9s" ? "" : undefined} data-label="P9S" style={{ backgroundImage: `url(${ImgP9})` }}></div></Link>
          <Link to="./p10s"><div className="boss-button" data-active={path === "p10s" ? "" : undefined} data-label="P10S" style={{ backgroundImage: `url(${ImgP10})` }}></div></Link>
          <Link to="./p11s"><div className="boss-button" data-active={path === "p11s" ? "" : undefined} data-label="P11S" style={{ backgroundImage: `url(${ImgP11})` }}></div></Link>
          <Link to="./p12s-part-1"><div className="boss-button" data-active={path === "p12s-part-1" ? "" : undefined} data-label="P12S I" style={{ backgroundImage: `url(${ImgP12_1})` }}></div></Link>
        </nav>
      </header>
      <div className="page-anabaseios">
        <Outlet />
      </div>
    </>
  );
}

export default Anabaseios;
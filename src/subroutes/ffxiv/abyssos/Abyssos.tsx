import { Routes, Route, Link, Outlet, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
import ImgP5 from "./res/img/p5.jpg";
import ImgP6 from "./res/img/p6.jpg";
import ImgP7 from "./res/img/p7.jpg";
import ImgP8_1 from "./res/img/p8-1.jpg";
import ImgP8_2 from "./res/img/p8-2.jpg";
import Banner from "./res/img/bg-abyssos.png";

import P5S from "./P5S";
import P6S from "./P6S";
import P7S from "./P7S";
import P8S1 from "./P8S1";
import P8S2 from "./P8S2";


function Abyssos() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/p5s" element={<P5S />} />
        <Route path="/p6s" element={<P6S />} />
        <Route path="/p7s" element={<P7S />} />
        <Route path="/p8s-part-1" element={<P8S1 />} />
        <Route path="/p8s-part-2" element={<P8S2 />} />
        <Route path="*" element={<Navigate to="/ffxiv/abyssos" replace />} />
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
          <Link to="./p5s"><div className="boss-button" data-active={path === "p5s" ? "" : undefined} data-label="P5S" style={{ backgroundImage: `url(${ImgP5})` }}></div></Link>
          <Link to="./p6s"><div className="boss-button" data-active={path === "p6s" ? "" : undefined} data-label="P6S" style={{ backgroundImage: `url(${ImgP6})` }}></div></Link>
          <Link to="./p7s"><div className="boss-button" data-active={path === "p7s" ? "" : undefined} data-label="P7S" style={{ backgroundImage: `url(${ImgP7})` }}></div></Link>
          <Link to="./p8s-part-1"><div className="boss-button" data-active={path === "p8s-part-1" ? "" : undefined} data-label="P8S I" style={{ backgroundImage: `url(${ImgP8_1})` }}></div></Link>
          <Link to="./p8s-part-2"><div className="boss-button" data-active={path === "p8s-part-2" ? "" : undefined} data-label="P8S II" style={{ backgroundImage: `url(${ImgP8_2})` }}></div></Link>
        </nav>
      </header>
      <div className="page-abyssos">
        <Outlet />
      </div>
    </>
  );
}

export default Abyssos;
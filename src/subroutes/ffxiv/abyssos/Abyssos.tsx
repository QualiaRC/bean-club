import { useEffect } from "react";
import { Routes, Route, Link, Outlet, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
import Guide from "./Guide";
import ImgP5 from "../../../res/img/p5.jpg";
import ImgP6 from "../../../res/img/p6.jpg";
import ImgP7 from "../../../res/img/p7.jpg";
import ImgP8_1 from "../../../res/img/p8-1.jpg";
import ImgP8_2 from "../../../res/img/p8-2.jpg";
import SiteData from "./res/data.json";

function Abyssos() {
  useEffect(() => {
    document.title = "Bean Club| FFXIV - Abyssos (Savage)";
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/p5s" element={<Guide data={SiteData.p5} />} />
        <Route path="/p6s" element={<Guide data={SiteData.p6} />} />
        <Route path="/p7s" element={<Guide data={SiteData.p7} />} />
        <Route path="/p8s-part-1" element={<Guide data={SiteData.p8} />} />
        <Route path="/p8s-part-2" element={<Guide data={SiteData.p8} />} />
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
      <header className="abyssos-header" />
      <div className="page-abyssos">
        <Outlet />
        <nav className="abyssos-bosses button-container section">
          <Link to="./p5s"><div className="boss-button" data-active={path === "p5s" ? "" : undefined} data-label="P5S" style={{ backgroundImage: `url(${ImgP5})` }}></div></Link>
          <Link to="./p6s"><div className="boss-button" data-active={path === "p6s" ? "" : undefined} data-label="P6S" style={{ backgroundImage: `url(${ImgP6})` }}></div></Link>
          <Link to="./p7s"><div className="boss-button" data-active={path === "p7s" ? "" : undefined} data-label="P7S" style={{ backgroundImage: `url(${ImgP7})` }}></div></Link>
          <Link to="./p8s-part-1"><div className="boss-button" data-active={path === "p8s-part-1" ? "" : undefined} data-label="P8S I" style={{ backgroundImage: `url(${ImgP8_1})` }}></div></Link>
          <Link to="./p8s-part-2"><div className="boss-button" data-active={path === "p8s-part-2" ? "" : undefined} data-label="P8S II" style={{ backgroundImage: `url(${ImgP8_2})` }}></div></Link>
        </nav>
      </div>
    </>
  );
}

export default Abyssos;
import "./Ffxiv.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
import Abyssos from "./abyssos/Abyssos";
import Dragonsong from "./dragonsong/Dragonsong";

function Ffxiv() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="" element={<Home />} />
        <Route path="/abyssos/*" element={<Abyssos />} />
        <Route path="/dragonsong/*" element={<Dragonsong />} />
        <Route path="*" element={<Navigate to="/ffxiv" replace />} />
      </Route>
    </Routes>
  );
}

function Wrapper() {
  const location = useLocation();
  useEffect(() => {
    document.title = "Bean Club| FFXIV";
    toggleState(false);
  }, [location]);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleState = (state:boolean) => {
    setMenuOpen(state);
  }

  let [touchstartX, touchendX] = [0, 0];
  document.addEventListener("touchstart", e => {
    touchstartX = e.changedTouches[0].screenX;
  });
  document.addEventListener("touchend", e => {
    touchendX = e.changedTouches[0].screenX;
    if(menuOpen) {
      if(touchstartX - touchendX > 100) return toggleState(false);
    } else {
      if(touchendX - touchstartX > 120) return toggleState(true);
    }
  });

  return (
    <div id="container">
      <nav className="navbar">
        <Link to="/ffxiv"><div className="logo-button" /></Link>
        <div className={menuOpen ? "icon-close" : "icon-menu"} onClick={() => { toggleState(!menuOpen) }} />
      </nav>

      { menuOpen ? <div className="close-region" onClick={() => { toggleState(false) }} /> : null }
      <nav className="drawer" data-open={menuOpen ? "" : undefined}>
        <ul>
          <li><h1>Encounters</h1></li>
          <li><Link to="./abyssos"><div>Abyssos (Savage)</div></Link></li>
          <li><Link to="./dragonsong"><div>Dragonsong's Reprise (Ultimate)</div></Link></li>
          <li><h1>External</h1></li>
          <li><a href="https://www.fflogs.com/guild/id/95907" target="_blank"><div className="fflogs">FF Logs Guild</div></a></li>
          <li><a href="https://discord.gg/7N39K3nRt3" target="_blank"><div className="discord">Discord</div></a></li>
        </ul>
      </nav>

      <div id="main-section">
        <Outlet />
        <div className="copyright">Copyright &copy; {new Date().getFullYear()} Bean Club All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Ffxiv;
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Ffxiv from "./subroutes/ffxiv/Ffxiv";
import Certified from "./subroutes/certified/Certified";
import Dema from "./subroutes/dema/Dema";
import Rats from "./subroutes/rats/Rats";
import Logo from "./res/img/ff14bean.png";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/ffxiv/*" element={<Ffxiv />} />
        <Route path="/certified/*" element={<Certified />} />
        <Route path="/dema/*" element={<Dema />} />
        <Route path="/rats/*" element={<Rats />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div id="home">
      <div className="container">

        <img className="logo" src={Logo} alt="Bean Club" />
        <h1>Bean Club</h1>
        <div className="button-container">
          <Link to="/ffxiv">
            <button>Final Fantasy XIV</button>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default App;

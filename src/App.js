// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import About from "./pages/About/About";
import { Navbar } from "./components/Elements/Nav/Navbar";
import { Footer } from "./components/Elements/Foot/Footer";
import  AboutValues  from "./pages/About/Values/AboutValues"
import Board from "./pages/About/BoardOfDirector/Boards"
import MilestoneAward from "./pages/About/MilestoneAwards/MilestoneAward";
import Taglines from "./pages/About/Tagline/Taglines";
import VisionMissions from "./pages/About/VisionMissions/VisionMission";
import {DetailScania} from "./pages/Products/Scania/DetailScania";
import {ProductScania} from "./pages/Products/Scania/ProductScania";

function App() {
  return (
    <>
    <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/values" element={<AboutValues />} />
          <Route path="/board" element={<Board />}/>
          <Route path="/awards" element={<MilestoneAward />}/>
          <Route path="/tagline" element={<Taglines />}/>
          <Route path="/vision" element={<VisionMissions />}/>
          <Route path="/detailscania" element={<DetailScania />}/>
          <Route path="/productscania" element={<ProductScania />}/>
        </Routes>
      </Router>
    <Footer/>
    </>
  );
}

export default App;

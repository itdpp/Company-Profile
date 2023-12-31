// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import About from "./pages/About/About";
import { Navbar } from "./components/Elements/Nav/Navbar";
import { Footer } from "./components/Elements/Foot/Footer";
import AboutValues from "./pages/About/Values/AboutValues";
import { ProductScania } from "./pages/Products/Scania/ProductScania";
import { TypeScania } from "./pages/Products/Scania/TypeScania";
import { DetailScania } from "./pages/Products/Scania/DetailScania";
import Board from "./pages/About/BoardOfDirector/Boards";
import MilestoneAward from "./pages/About/MilestoneAwards/MilestoneAward";
import Taglines from "./pages/About/Tagline/Taglines";
import VisionMissions from "./pages/About/VisionMissions/VisionMission";
import { TypeScaniaFuel } from "./pages/Products/Scania/TypeScaniaFuel";
import { TypeScaniaVessel } from "./pages/Products/Scania/TypeScaniaVessel";
import { Contact } from "./pages/Contact/Contact";
import { ProductPatria } from "./pages/Products/Patria/ProductPatria";
import { News } from "./pages/News/News";
import { DetailNews } from "./pages/News/DetailNews";
import LandingPage from "./pages/LandingPages/LandingPage";
import Industries from "./pages/Industries/Industries";
import Career from "./pages/Career/Career";
import OurNetwork from "./pages/OurNetwork/OurNetwork";
import NotFound from "./pages/NotFound";
import ProgramCSR from "./pages/ProgramCSR/ProgramCSR";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/productscania" element={<ProductScania />} />
          <Route path="/detailscania" element={<DetailScania />} />
          {/* <Route path="/Values" element={<AboutValues />} /> */}
          <Route path="/board" element={<Board />} />
          <Route path="/awards" element={<MilestoneAward />} />
          {/* <Route path="/tagline" element={<Taglines />} /> */}
          {/* <Route path="/vision" element={<VisionMissions />} /> */}
          <Route path="/detailscania" element={<DetailScania />} />
          <Route path="/productscania" element={<ProductScania />} />
          <Route path="/typescania/:id" element={<TypeScania />} />
          <Route path="/typescaniafuel" element={<TypeScaniaFuel />} />
          <Route path="/typescaniavessel" element={<TypeScaniaVessel />} />
          <Route path="/productpatria" element={<ProductPatria />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/detailnews/:id" element={<DetailNews />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/career" element={<Career />} />
          <Route path="/ournetwork" element={<OurNetwork />} />
          <Route path="/programcsr" element={<ProgramCSR />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

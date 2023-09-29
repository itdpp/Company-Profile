// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import About from "./pages/About/About";
import { Navbar } from "./components/Elements/Navbar";
import { Footer } from "./components/Elements/Footer";
import { ProductScania } from "./pages/Products/Scania/ProductScania";
import { DetailScania } from "./pages/Products/Scania/DetailScania";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/productscania" element={<ProductScania/>} />
          <Route path="/detailscania" element={<DetailScania/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;

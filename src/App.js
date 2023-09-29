// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { Products } from './pages/Products/Products'; 
import About from './pages/Abouts/About';
import { Navbar } from './components/Elements/Navbar';

function App() {
  return (
    <>
    <Navbar/>
   <Router>
    <Routes>
      <Route path='/' element={<About/>} />
      <Route path='/Product' element={<Products/>} />
    </Routes>
   </Router>
    </>
  );
}

export default App;

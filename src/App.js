import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div class="footer">
        <p><a href="https://www.freepik.com/free-photo/monstera-deliciosa-concrete-wall_15608949.htm#fromView=search&page=2&position=19&uuid=8c61990e-4495-4bf4-b36e-7a01f5ab451a"
        target="blank">Designed by Freepik</a></p>
      </div>
    </div>
  );
}

export default App;
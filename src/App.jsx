import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Utils/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/AboutUs";
import Contact from "./components/pages/ContactUs";
import Partners from "./components/pages/Partners";
import Impact from "./components/pages/Impact";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/impact" element={<Impact/>} />

      </Routes>
    </div>
  )
}

export default App;

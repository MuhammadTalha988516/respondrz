import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/AboutUs";
import Contact from "./components/pages/ContactUs";
import Partners from "./components/pages/Partners";
import Impact from "./components/pages/Impact";
import { useLenis } from "./hooks/uselenis";



function App() {
  useLenis();
  return (
    
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/impact" element={<Impact/>} />

      </Routes>
    </div>
  )
}

export default App;

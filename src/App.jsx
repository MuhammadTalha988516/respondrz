import { BrowserRouter, Routes, Route } from "react-router-dom";


// Pages
import Home from "./components/pages/Home";
import About from './components/pages/AboutUs'
import Contact from './components/pages/ContactUs'


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

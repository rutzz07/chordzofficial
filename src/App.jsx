import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Web from "./pages/Web";
import AppDev from "./pages/AppDev";
import AI from "./pages/AI";
 import SEO from "./pages/SEO";
 import Marketing from "./pages/Marketing";
  import Projects from "./pages/Projects";
 import Contact from "./pages/Contact";
 import Partners from "./pages/Partners";
 import Career from "./pages/Career";
 import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web" element={<Web />} />
        <Route path="/app" element={<AppDev />} />
        <Route path="/ai" element={<AI />} />
         <Route path="/seo" element={<SEO />} />
         
        <Route path="/marketing" element={<Marketing />} />
          <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/career" element={<Career />} />
              <Route path="/support" element={<Support />} />
              <Route path="/partners" element={<Partners />} />
              
        {/*
       
      
    
        
        <
         */}
      </Routes>
    </Router>
  );
}

export default App;

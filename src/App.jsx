import Topbar from "./Components/Topbar/Topbar";
import Intro from "./Components/Intro/Intro"
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Works/Works";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import "./App.scss";
import {useState} from "react";
import Menu from "./Components/Menu/Menu";



function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
    
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      < Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />

    </div>
    </div>
  );
}

export default App;

//you are using plugins from gsap/all, so you need to import them from there instead of gsap/ScrollTrigger and gsap/SplitText.

import {ScrollTrigger, SplitText, gsap} from "gsap/all";  
import React from "react";
import Cocktails from "./components/Cocktails.jsx";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
//register the plugins with gsap global scope
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  )
}

export default App
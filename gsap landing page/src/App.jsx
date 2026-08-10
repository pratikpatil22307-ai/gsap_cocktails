//you are using plugins from gsap/all, so you need to import them from there instead of gsap/ScrollTrigger and gsap/SplitText.

import {ScrollTrigger, SplitText, gsap} from "gsap/all";  
import React from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
//register the plugins with gsap global scope
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App
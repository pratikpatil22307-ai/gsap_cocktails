//you are using plugins from gsap/all, so you need to import them from there instead of gsap/ScrollTrigger and gsap/SplitText.

import {ScrollTrigger,SplitText,gsap} from "gsap/all";  
import React from "react";
//register the plugins with gsap global scope
gsap.registerPlugin(ScrollTrigger,SplitText);
const App=()=>{
  return (
    <div className="flex-center h-[100vh]">
    <h1 className="text-3xl text-indigo-300">
      Hello, GSAP!
    </h1>
    </div>
  )
}
    export default App
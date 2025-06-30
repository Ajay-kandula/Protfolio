import React from "react";
import Nabvar from "./Component/Navbar";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Project from "./Component/Project";
import Education from "./Component/Education";
import Experience from "./Component/Profesional Experience";
import Drives from "./Component/What Drives Me";

function App(){
 return(
   <div style={{justifyContent:'space-between',alignItems:'center',border:'1px solid #ccc',borderRadius:"10px",padding:'20px',margin:'2px',backgroundColor:"#002e63"}}>
    <Nabvar/>
    <About/>
    <Education/>
    <Drives/>
    <Project/>
    <Experience/>
    <Contact/>
  </div>
 )
}
export default App;
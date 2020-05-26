import React from "react"
import Toolbar from "../components/toolbar"

export default function About() {
  return (
    <div>
      <Toolbar/>
      <div id="aboutheader" >
        <div id="aboutparallax" className="parallax">       
        </div>
      </div>
      <div style = {{width:"100%", height: "1000px"}}></div>
    </div>
  )
}
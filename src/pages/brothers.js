import React from "react"
import Toolbar from "../components/toolbar"
import BootstrapCard from "../components/card"
import {bros} from "../objects/bros.js"
import Application from "../components/app"
import Footer from "../components/footer"



export default function Brothers() {
  


  return (
    <div>
    <Application page="Brothers"/>
      <Toolbar page="brothers"/>
      <h1 className="Broheader">Active Brothers</h1>
      <hr></hr>
      <div className="boxContainer" style={{ "position": "relative","width": "90%", "left":"5%", paddingBottom:"50px" }}>
        {bros.map((person,index) => (
          <BootstrapCard  bro={person}/>
        ))}

      </div>
      <Footer/>
    </div>
  )
}
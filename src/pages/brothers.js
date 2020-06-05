import React from "react"
import Toolbar from "../components/toolbar"
import BootstrapCard from "../components/card"
import {bros} from "../objects/bros.js"



export default function Brothers() {
  


  return (
    <div>
      <Toolbar page="brothers"/>
      <h1 className="Broheader">Active Brothers</h1>
      <hr></hr>
      <div className="boxContainer" style={{ "position": "absolute","width": "90%", "left":"5%", }}>
        {bros.map((person,index) => (
          <BootstrapCard  bro={person}/>
        ))}

      </div>
    </div>
  )
}
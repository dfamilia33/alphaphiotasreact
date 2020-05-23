import React from "react"
import Toolbar from "../components/toolbar"
import BootstrapCard from "../components/card"
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'




export default function Brothers() {
  
  const bros = [
    
    {
      name: "Daniel Familia",
    },
    {
      name: "Carlos Power",
    },
    {
      name: "Luis Garcia",
    },
    {
      name: "Myron Rios",
    },
    {
      name: "Marvin Rios",
    },
    {
      name: "Ben Blake",
    },
    {
      name: "Jose Canales",
    },
  ]



  return (
    <div>
      <Toolbar/>
      <h1 style={{ color: `red` }}>Brothers Page Coming Soon</h1>
      <hr></hr>
      <p style={{ color: `white` }}>This is where the brothers page will go. Planning on making a roster view
      of brothers using card like objects with flexbox. <br></br> The cards will have an image
      and maybe things like:</p>
      <ul style={{ color: `white` }}>
          <li>Class year</li>
          <li>Crossing</li>
          <li>Major</li>
          <li>Nationality</li>
          <li>Hometown</li>
      </ul>
      <CardColumns style={{ "position": "absolute","width": "90%", "left":"5%", }}>
        {bros.map((person,index) => (
          <BootstrapCard bro={person}/>
        ))}
      </CardColumns>
    </div>
  )
}
import React from "react"
import Toolbar from "../components/toolbar"
import BootstrapCard from "../components/card"
import Franquizpf from "../../static/src/img/cristianfranquizsq.jpeg"
import Familiapf from "../../static/src/img/dfprofile.jpg"





export default function Brothers() {
  
  const bros = [
    {
      name:"Andres Almeida",
    },
    {
      name:"Antonio Anaya",
    },
    {
      name: "Ben Blake",
    },
    {
      name:"Cesar Bravo",
    },
    {
      name:"Diego De Cabanyes",
    },
    {
      name: "Jose Canales",
    },
    {
      name: "Daniel Familia",
      src: Familiapf,
    },
    {
      name: "Cristian Franquiz",
      src: Franquizpf,
    },
    {
      name: "Luis Garcia",
    },
    {
      name:"David Mata Jimenez ",
    },
    {
      name:"Giuseppe Molfino",
    },
    {
      name:"Sean Phulnauth",
    },
    {
      name:"Alexander Pirovano",
    },
    {
      name: "Carlos Power",
    },
    {
      name:"Jonathan Punin",
    },
    {
      name: "Marvin Rios",
    },
    {
      name:"Leonardo De La Rosa",
    },
    {
      name:"Michael Sanchez",
    },
    {
      name:"Khaled Soliman",
    },
    {
      name:"Gavin Tomlinson",
    },
    {
      name:"Ethan Wright ",
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
      <div className="boxContainer" style={{ "position": "absolute","width": "90%", "left":"5%", }}>
        {bros.map((person,index) => (
          <BootstrapCard bro={person}/>
        ))}
      </div>
    </div>
  )
}
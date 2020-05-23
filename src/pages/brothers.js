import React from "react"
import Toolbar from "../components/toolbar"
import BootstrapCard from "../components/card"
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import Franquizpf from "../../static/src/img/cristianfranquizsq.jpeg"
import Familiapf from "../../static/src/img/dfprofile.jpg"





export default function Brothers() {
  
  const bros = [
    {
      name:"Andres Almeida",
    },
    {
      name: "Daniel Familia",
      src: Familiapf,
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
    {
      name: "Cristian Franquiz",
      src: Franquizpf,
    },
    {
      name:"Antonio Anaya",
    },
    {
      name:"Cesar Bravo",
    },
    {
      name:"Diego De Cabanyes",
    },
    {
      name:"Leonardo De La Rosa",
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
      name:"Jonathan Punin",
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
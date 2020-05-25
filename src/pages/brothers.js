import React from "react"
import Toolbar from "../components/toolbar"
import BootstrapCard from "../components/card"
import Franquizpf from "../../static/src/img/cristianfranquizsq.jpeg"
import Familiapf from "../../static/src/img/dfprofile.jpg"
import Seanpf from "../../static/src/img/seanphulnauthpf.jpg"
import DRflag from "../../static/src/img/4x3/do.svg"
import PRflag from "../../static/src/img/4x3/pr.svg"
import COflag from "../../static/src/img/4x3/co.svg"
import MXflag from "../../static/src/img/4x3/mx.svg"
import ARflag from "../../static/src/img/4x3/ar.svg"
import PEflag from "../../static/src/img/4x3/pe.svg"
import HNflag from "../../static/src/img/4x3/hn.svg"
import ITflag from "../../static/src/img/4x3/it.svg"
import GYflag from "../../static/src/img/4x3/gy.svg"
import ECflag from "../../static/src/img/4x3/ec.svg"
import EGflag from "../../static/src/img/4x3/eg.svg"
import JMflag from "../../static/src/img/4x3/jm.svg"




export default function Brothers() {
  
  const bros = [
    {
      name:"Andres Almeida",
      bname:"Benkos Bioho",
      line:"Los Rumis (Spring '19)",
      major:["Mechanical Engineering"],
      minor:["Computer Science"],
      graduation:"2022",
      hometown:"Cartagena, CO",
      nationality:["Colombian"],
      position:"Academic Chair",
      flagsrc:[COflag],
    },
    {
      name:"Antonio Anaya",
      bname:"Huitzilopo",
      line:"Siete Sueños (Spring '20)",
      major:["Electrical Engineering"],
      graduation:"2023",
      hometown:"New Rochelle, NY",
      nationality:["Mexican"],
      flagsrc:[MXflag],
    },
    {
      name: "Ben Blake",
      bname:"Khalo",
      line:"Los Turistas (Fall '17)",
      major:["Computer Science"],
      graduation:"2021",
      hometown:"Harrisonburg, VA",
      nationality:["Argentine"],
      position:"Treasurer",
      flagsrc:[ARflag],
    },
    {
      name:"Cesar Bravo",
      bname:"Sumag Ñawi",
      line:"Siete Sueños (Spring '20)",
      major:["Biology"],
      graduation:"2023",
      hometown:"Lindenhurst, NY",
      nationality:["Peruvian"],
      flagsrc:[PEflag],
    },
    {
      name:"Diego De Cabanyes",
      bname:"Melchor",
      line:"Los Rumis (Spring '19)",
      major:["Engineering"],
      graduation:"2022",
      hometown:"Mexico DF, MX",
      nationality:["Mexican"],
      flagsrc:[MXflag],
    },
    {
      name: "Jose Canales",
      bname:"Faby",
      line:"Los 4 Elementos (Fall '19)",
      major:["Civil Engineering"],
      graduation:"2022",
      hometown:"Yonkers, NY",
      nationality:["Honduran"],
      flagsrc:[HNflag],
    },
    {
      name: "Daniel Familia",
      bname:"Mariposa",
      line:"Los 4 Elementos (Fall '19)",
      major:["Computer Science"],
      minor:["ITWS"],
      graduation:"2022",
      hometown:"Waterbury, CT",
      nationality:["Dominican"],
      position:"Web Chair",
      src: Familiapf,
      flagsrc:[DRflag],
    },
    {
      name:"Christian Franquiz",
      bname:"Tutiyo",
      line:"Los 4 Elementos (Fall '19)",
      major:["Chemistry", "Accelerated B.S./Ph.D."],
      graduation:"2021",
      hometown:"San Juan, PR",
      nationality:["Puerto Rican"],
      src: Franquizpf,
      flagsrc:[PRflag],
    },
    {
      name:"David Mata Jimenez ",
      bname:"Minero",
      line:"Los Chavos del 8 (Fall '16)",
      major:["Computer Science"],
      minor:["Philosophy"],
      graduation:"2022",
      hometown:"San Antonio, TX",
      nationality:["Mexican"],
      position:"Community Service Chair",
      flagsrc:[MXflag],
    },
    {
      name:"Giuseppe Molfino",
      bname:"Huaccha Khoyaq",
      line:"Siete Sueños (Spring '20)",
      major:["Engineering"],
      graduation:"2023",
      hometown:"Newark, NJ",
      nationality:["Peruivan","Italian"],
      position:"Social Chair",
      flagsrc:[PEflag,ITflag],
    },
    {
      name:"Sean Phulnauth",
      bname:"Monte",
      line:"Uptown (Spring '18)",
      major:["Mechanical Engineering"],
      graduation:"2021",
      hometown:"Bronx, NY",
      nationality:["Guyanese"],
      position:"President",
      src: Seanpf,
      flagsrc:[GYflag],
    },
    {
      name:"Alexander Pirovano",
      bname:"Hector",
      line:"Siete Sueños (Spring '20)",
      major:["Engineering"],
      graduation:"2022",
      hometown:"Hazlet, NJ",
      nationality:["Puerto Rican", "Argentine"],
      flagsrc:[PRflag,ARflag]
    },
    {
      name: "Carlos Power",
      bname:"Power Y Geralt",
      line:"Los Turistas (Fall '17)",
      major:["Computer Sciene","ITWS"],
      graduation:"2021",
      hometown:"Trujillo Alto, PR",
      nationality:["Puerto Rican"],
      flagsrc:[PRflag],
    },
    {
      name:"Jonathan Punin",
      bname:"Bochi",
      line:"Siete Sueños (Spring '20)",
      major:["Computer Systems Engineering"],
      graduation:"2023",
      hometown:"Bronx, NY",
      nationality:["Ecuadorian"],
      flagsrc:[ECflag],
    },
    {
      name: "Marvin Rios",
      bname:"Kennedy",
      line:"Los Chavos del 8 (Fall '16)",
      major:["Chemical Engineering"],
      graduation:"2021",
      hometown:"Egg Harbor Township, NJ",
      nationality:["Peruvian"],
      flagsrc:[PEflag],
    },
    {
      name:"Leonardo De La Rosa",
      bname:"Bairoa",
      line:"Siete Sueños (Spring '20)",
      major:["Engineering"],
      graduation:"2023",
      hometown:"Guaynabo, PR",
      nationality:["Puerto Rican"],
      flagsrc:[PRflag],
    },
    {
      name:"Michael Sanchez",
      bname:"Principito",
      line:"Siete Sueños (Spring '20)",
      major:["Engineering"],
      graduation:"2023",
      hometown:"Bronx, NY",
      nationality:["Mexican"],
      flagsrc:[MXflag],
    },
    {
      name:"Khaled Soliman",
      bname:"Nimr",
      line:"Los 4 Elementos (Fall '19)",
      major:["Aerospace Engineering"],
      graduation:"2021",
      hometown:"Brooklyn, NY",
      nationality:["Egyptian"],
      position:"Vice President",
      flagsrc:[EGflag],
    },
    {
      name:"Gavin Tomlinson",
      bname:"Sfigato",
      line:"Uptown (Spring '18)",
      major:["Egnineering"],
      graduation:"2021",
      hometown:"Bronx, NY",
      nationality:["Jamaican"],
      position:"Fundraising Chair",
      flagsrc:[JMflag],
    },
    {
      name:"Ethan Wright ",
      bname:"Selección",
      line:"Los Chavos del 8 (Fall 16)",
      major:["Computer Science"],
      graduation:"2020",
      hometown:["Cordova, TN"],
      nationality:["Honduran"],
      flagsrc:[HNflag],
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
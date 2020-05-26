import React from "react"
import Toolbar from "../components/toolbar"
import BootstrapCard from "../components/card"
import Franquizpf from "../../static/src/img/cristianfranquizsq.jpeg"
import Familiapf from "../../static/src/img/dfprofile.jpg"
import Seanpf from "../../static/src/img/seanphulnauthpf.jpg"
import Pirovanopf from "../../static/src/img/pirovanopf.jpeg"
import Molfinopf from "../../static/src/img/giuseppeepf.jpeg"
import Jonathonpf from "../../static/src/img/jonathon.jpeg"
import Cesarpf from "../../static/src/img/cesar.jpeg"
import Leopf from "../../static/src/img/leo.jpeg"
import Michaelpf from "../../static/src/img/michael.jpeg"
import Powerspf from "../../static/src/img/powers.jpeg"
import Marvinpf from "../../static/src/img/marvinpf.jpeg"
import Tonypf from "../../static/src/img/tony.jpeg"
import DRflag from "../../static/src/img/4x3/do.svg"
import PRflag from "../../static/src/img/4x3/pr.png"
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
import CUflag from "../../static/src/img/4x3/cu.png"



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
      src:Tonypf,
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
      major:["Chemical Engineering"],
      graduation:"2023",
      hometown:"Lindenhurst, NY",
      nationality:["Peruvian"],
      src:Cesarpf,
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
      line:<div>Los Cuatro Elementos<br></br>(Fall '19)</div>,
      major:["Civil Engineering"],
      graduation:"2022",
      hometown:"Yonkers, NY",
      nationality:["Honduran"],
      flagsrc:[HNflag],
    },
    {
      name: "Daniel Familia",
      bname:"Mariposa",
      line:<div>Los Cuatro Elementos<br></br>(Fall '19)</div>,
      major:["Computer Science"],
      minor:["Information Technology & Web Science"],
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
      line:<div>Los Cuatro Elementos<br></br>(Fall '19)</div>,
      major:["Chemistry", "Accelerated B.S./Ph.D."],
      graduation:"2021",
      hometown:"San Juan, PR",
      nationality:["Puerto Rican"],
      position:"Recruitment Chair",
      src: Franquizpf,
      flagsrc:[PRflag],
    },
    {
      name:"David Mata Jimenez ",
      bname:"Minero",
      line:<div>Los Chavos del Ocho <br></br> (Fall '16)</div>,
      major:["Computer Science"],
      minor:["Philosophy"],
      graduation:"2020",
      hometown:"San Antonio, TX",
      nationality:["Mexican"],
      position:"Community Service Chair",
      flagsrc:[MXflag],
    },
    {
      name:"Giuseppe Molfino",
      bname:"Huaccha Khoyaq",
      line:"Siete Sueños (Spring '20)",
      major:["Aeronautical Engineering"],
      graduation:"2023",
      hometown:"Newark, NJ",
      nationality:["Peruivan","Italian"],
      position:"Social Chair",
      src: Molfinopf,
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
      major:["Mechanical Engineering"],
      graduation:"2022",
      hometown:"Hazlet, NJ",
      nationality:[ "Argentine","Puerto Rican","Italian","Cuban"],
      src: Pirovanopf,
      flagsrc:[ARflag,PRflag,ITflag,CUflag]
    },
    {
      name: "Carlos Power",
      bname:"Power y Giralt",
      line:"Los Turistas (Fall '17)",
      major:["Information Technology & Web Science"],
      graduation:"2021",
      hometown:"Trujillo Alto, PR",
      nationality:["Puerto Rican"],
      position:"Alumni Relations Chair",
      src:Powerspf,
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
      src:Jonathonpf,
      flagsrc:[ECflag],
    },
    {
      name: "Marvin Rios",
      bname:"Kennedy",
      line:<div>Los Chavos del Ocho <br></br> (Fall '16)</div>,
      major:["Chemical Engineering"],
      graduation:"2021",
      hometown:"Egg Harbor Township, NJ",
      nationality:["Peruvian"],
      position:"Public Relations Chair",
      src:Marvinpf,
      flagsrc:[PEflag],
    },
    {
      name:"Leonardo De La Rosa",
      bname:"Bairoa",
      line:"Siete Sueños (Spring '20)",
      major:["Aerospace Engineering"],
      graduation:"2023",
      hometown:"Caguas, PR",
      nationality:["Puerto Rican"],
      src:Leopf,
      flagsrc:[PRflag],
    },
    {
      name:"Michael Sanchez",
      bname:"Principito",
      line:"Siete Sueños (Spring '20)",
      major:["Aeronautical Engineering"],
      graduation:"2023",
      hometown:"Bronx, NY",
      nationality:["Mexican"],
      src:Michaelpf,
      flagsrc:[MXflag],
    },
    {
      name:"Khaled Soliman",
      bname:"Nimr",
      line:<div>Los Cuatro Elementos<br></br>(Fall '19)</div>,
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
      line:<div>Los Chavos del Ocho <br></br> (Fall '16)</div>,
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
      <h1 className="Broheader">Active Brothers</h1>
      <hr></hr>
      <div className="boxContainer" style={{ "position": "absolute","width": "90%", "left":"5%", }}>
        {bros.map((person,index) => (
          <BootstrapCard bro={person}/>
        ))}

      </div>
    </div>
  )
}
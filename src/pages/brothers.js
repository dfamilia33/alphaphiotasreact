import React from "react"
import Toolbar from "../components/toolbar"
import BootstrapCard from "../components/card"
import Franquizpf from "../../static/src/img/cristianfranquizsq.jpeg"
import Familiapf from "../../static/src/img/dfprofile.jpg"
import Seanpf from "../../static/src/img/seanphulnauthpf.jpg"
import DRflag from "../../static/src/img/4x3/do.svg"
import PRflag from "../../static/src/img/4x3/pr.svg"






export default function Brothers() {
  
  const bros = [
    {
      name:"Andres Almeida",
      bname:"Benkos Bioho",
      line:"Los Rumis (Spring \'19)",
      major:["Mechanical Engineering"],
      minor:["Computer Science"],
      graduation:"2022",
      hometown:"Cartagena, CO",
      nationality:["Colombian"],
      position:["Academic Chair"],
    },
    {
      name:"Antonio Anaya",
      bname:"Huitzilopo",
      line:"Siete Sueños (Spring \'20)",
      major:["Electrical Engineering"],
      graduation:"2023",
      hometown:"New Rochelle, NY",
      nationality:["Mexican"],
    },
    {
      name: "Ben Blake",
      bname:"Khalo",
      line:"Los Turistas (Fall \'17)",
      major:["Computer Science"],
      graduation:"2021",
      hometown:"Harrisonburg, VA",
      nationality:["Argentine"],
      position:["Treasurer"],
    },
    {
      name:"Cesar Bravo",
      bname:"Sumag Ñawi",
      line:"Siete Sueños (Spring \'20)",
      major:["Biology"],
      graduation:"2023",
      hometown:"Lindenhurst, NY",
      nationality:["Peruvian"],
    },
    {
      name:"Diego De Cabanyes",
      bname:"Melchor",
      line:"Los Rumis (Spring \'19)",
      major:["Engineering"],
      graduation:"2022",
      hometown:"Mexico DF, MX",
      nationality:["Mexican"],
    },
    {
      name: "Jose Canales",
      bname:"Faby",
      line:"Los 4 Elementos (Fall '19)",
      major:["Civil Engineering"],
      graduation:"2022",
      hometown:"Yonkers, NY",
      nationality:["Honduran"],
    },
    {
      name: "Daniel Familia",
      line:"Los 4 Elementos (Fall '19)",
      major:["Computer Science"],
      minor:["ITWS"],
      graduation:"2022",
      hometown:"Waterbury, CT",
      nationality:["Dominican"],
      position:["Web Chair"],
      src: Familiapf,
    },
    {
      name: "Cristian Franquiz",
      bname:"Tutiyo",
      line:"Los 4 Elementos (Fall '19)",
      major:["Chemistry", "Accelerated B.S./Ph.D."],
      graduation:"2021",
      hometown:"San Juan, PR",
      nationality:["Puerto Rican"],
      src: Franquizpf,
    },
    {
      name:"David Mata Jimenez ",
      bname:"Minero",
      line:"Los Chavos del 8 (Fall \'16)",
      major:["Computer Science"],
      minor:["Philosophy"],
      graduation:"2022",
      hometown:"San Antonio, TX",
      nationality:["Mexican"],
      position:["Community Service Chair"],
    },
    {
      name:"Giuseppe Molfino",
      bname:"Huaccha Khoyaq",
      line:"Siete Sueños (Spring \'20)",
      major:["Engineering"],
      graduation:"2023",
      hometown:"Newark, NJ",
      nationality:["Peruivan","Italian"],
      position:["Social Chair"],
    },
    {
      name:"Sean Phulnauth",
      src: Seanpf,
      bname:"Monte",
      line:"Uptown",
      major:["Mechanical Engineering"],
      graduation:"2021",
      hometown:"Bronx, NY",
      nationality:["Guyanese"],
      position:["President"],
    },
    {
      name:"Alexander Pirovano",
      bname:"Hector",
      line:"Siete Sueños (Spring \'20)",
      major:["Engineering"],
      graduation:"2022",
      hometown:"Hazlet, NJ",
      nationality:["Puerto Rican", "Argentine"],
    },
    {
      name: "Carlos Power",
      bname:"Power Y Geralt",
      line:"Los Turistas (Fall \'17)",
      major:["Computer Sciene","ITWS"],
      graduation:"2021",
      hometown:"Trujillo Alto, PR",
      nationality:["Puerto Rican"],
    },
    {
      name:"Jonathan Punin",
      bname:"Bochi",
      line:"Siete Sueños (Spring \'20)",
      major:["Computer Systems Engineering"],
      graduation:"2023",
      hometown:"Bronx, NY",
      nationality:["Ecuadorian"],
    },
    {
      name: "Marvin Rios",
      bname:"Kennedy",
      line:"Los Chavos del 8 (Fall \'16)",
      major:["Chemical Engineering"],
      graduation:"2021",
      hometown:"Egg Harbor Township, NJ",
      nationality:["Peruvian"],
    },
    {
      name:"Leonardo De La Rosa",
      bname:"Bairoa",
      line:"Siete Sueños (Spring \'20)",
      major:["Engineering"],
      graduation:"2023",
      hometown:"Guaynabo, PR",
      nationality:["Puerto Rican"],
    },
    {
      name:"Michael Sanchez",
      bname:"Principito",
      line:"Siete Sueños (Spring \'20)",
      major:["Engineering"],
      graduation:"2023",
      hometown:"Bronx, NY",
      nationality:["Mexican"],
    },
    {
      name:"Khaled Soliman",
      bname:"Nimr",
      line:"Los 4 Elementos (Fall '19)",
      major:["Aerospace Engineering"],
      graduation:"2021",
      hometown:"Brooklyn, NY",
      nationality:["Egyptian"],
      position:["Vice President"],
    },
    {
      name:"Gavin Tomlinson",
      bname:"Sfigato",
      line:"Uptown",
      major:["Egnineering"],
      graduation:"2021",
      hometown:"Bronx, NY",
      nationality:["Jamaican"],
      position:["Fundraising Chair"],
    },
    {
      name:"Ethan Wright ",
      bname:"Selección",
      line:"Los Chavos del 8 (Fall \'16)",
      major:["Computer Science"],
      graduation:"2020",
      hometown:["Cordova, TN"],
      nationality:["Honduran"],
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
        <div className="card bg-dark text-white" style={{width: "18rem", margin: "20px"}}>
          <div className="brotherimgbackdrop card-img-top">
            <div className="brotheroverlay">
              <div style={{color:"white", padding:20}}>
                <div>Brother Name: Mariposa</div>
                <div>Line: Los 4 Elementos (Fall '19)</div>
                <div>Major: Computer Science</div>
                <div>Minor: ITWS</div>
                <div>Graduation: 2022</div>
                <div>Hometown: Waterbury, CT</div>
                <div>Nationality: Dominican <img src={DRflag} alt="Dominican Flag" style ={{width: 20,height:15}}/></div> 
                <div>Position: Web Chair</div>
              </div>
            </div>
          </div>
          <div className="card-footer">Daniel Familia</div>    
        </div>

      </div>
    </div>
  )
}
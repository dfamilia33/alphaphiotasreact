import React from "react"
import Toolbar from "../components/toolbar"
import Benefitcard from "../components/benefitcard"
import Eboardcard from "../components/eboardcard"
import {bros} from "../objects/bros.js"
import Application from "../components/app"
import Footer from "../components/footer"




const benefits = [

  {
    title:"Leadership",
    text:[
          "Our chapter promotes leadership in the Rensselaer community amognst our brothers. ",
          "Brothers are encouraged to spearhead events, lead service projects, and hold workshops ",
          "for the campus community."
        ],
    color:"rgba(252, 209, 22,0.5)",
  },
  {
    title:"Academic",
    text:[
          "The academic chair keeps tabs on each brother to make sure they are excelling ",
          "in their academic coursework. Academic assistance is often given by upperclassmen ",
          "and even alumni to ensure brothers recieve the support they need."
         ],
    color:"rgba(0, 56, 147,0.5)",
  },
  {
    title:"Professional",
    text:[
          "Become part of a world-wide network of academics and professionals. Many alumni can be found at top ",
          "tech, finance, research, and academic institutions. Brothers often tap into this ",
          "network for career guidance and job opportunites.",
        ],
    color:"rgba(206, 17, 38,0.5)",
  },
  {
    title:"Community",
    text:[
          "With our volunteer and philonthropy efforts, brothers are given a chance to directly ",
          "make an impact on the local community. Efforts include park cleanup, Troy Middle School ",
          "tutoring, food pantry, and Troy Black Lives Matter rally volunteering.",
        ],
    color:"rgba(206, 17, 38,0.5)",
    
  },
  {
    title:"Social",
    text:[
          "Joining the fraternity offers the opportunity to create life-long friendships with ",
          "brothers who share similar values. Brothers hold a wide array of interests ",
          "from sports, games, culture, and music. There are social activities for everyone, ",
          "whether you prefer small groups or large crowds."
        ],
    color:"rgba(0, 56, 147,0.5)",
  },
  {
    title:"Culture",
    text:[
          "We are proud to have brothers from around the world, not just Latin America. Every year the fraternity ",
          "holds workshops and activities to celebrate Latinx Heritage month. Brothers are encouraged ",
          "to learn about and engage in their respective cultures."
    ],
    color:"rgba(252, 209, 22,0.5)",
  }
]





export default function Membership() {
  
  return (
    <div>
    <Application page="Membership"/>
      <Toolbar page="membership"/>
      <div id="memberheader" >
        <div id="memberparallax" className="parallax"> 
          <h2 className="overheader">Membership</h2>          
        </div>
      </div>
      <h1 style={{ color: `white`,textAlign:"center",margin:"100px",textShadow: "0px 0px 5px white" }}>Benefits</h1>
      <div className="benefitsbox">
        {benefits.map((item,index) => (
            <Benefitcard item={item}/>
          ))}
      </div>
      <div id = "membercontactinfo">
        <div style={{width:"150px",color:"white",float:"left",paddingTop:"140px",fontSize:"20px"}}>
          Interested?<br></br>
          Contact: 
        </div>
        <div style={{float:"left",width:"250px"}}>
          <Eboardcard bro={bros[10]} />
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}
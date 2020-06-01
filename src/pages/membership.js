import React from "react"
import Toolbar from "../components/toolbar"
import Benefitcard from "../components/benefitcard"
import Image from 'react-bootstrap/Image'
import Recruitmentchairimg from "../../static/src/img/cristianfranquizsq.jpeg"
import Eboardcard from "../components/eboardcard"

const benefits = [

  {
    title:"Leadership",
    text:[
          "Our chapter promotes leadership in the Rensselaer community amognst our brothers. ",
          "Brothers are encouraged to spearhead events, lead service projects, and hold workshops ",
          "for the campus community"
        ],
    color:"rgba(252, 209, 22,0.5)",
  },
  {
    title:"Academic",
    text:[
          "Our academic chair keeps tabs on each brother to make sure they are excelling ",
          "in their academic coursework. Academic assistance is often given by upperclassmen ",
          "and even alumni to ensure brothers recieve the support they need."
         ],
    color:"rgba(0, 56, 147,0.5)",
  },
  {
    title:"Professional",
    text:[
          "The professional network is a world wide network of brothers, with many at top ",
          "tech, finance, research, and academic institutions. Brothers often tap into this ",
          "network for career guidance and job opportunites.",
        ],
    color:"rgba(206, 17, 38,0.5)",
  },
  {
    title:"Community",
    text:[
          "With our volunteer and philonthropy efforts, brothers are given a chance to directly ",
          "make an impact on the local community.",
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
          "The fraternity sponsors many cultural activities on campus. Every year the fraternity ",
          "holds workshops and activities to celebrate Latinx Heritage month. Brothers are encouraged ",
          "to learn about and celebrate their respective cultures."
    ],
    color:"rgba(252, 209, 22,0.5)",
  }
]

export default function Membership() {
  return (
    <div>
      <Toolbar/>
      <div id="memberheader" >
        <div id="memberparallax" className="parallax">       
        </div>
      </div>
      <h1 style={{ color: `white`,textAlign:"center",margin:"100px",textShadow: "0px 0px 5px white" }}>Benefits</h1>
      <div className="benefitsbox">
        {benefits.map((item,index) => (
            <Benefitcard item={item}/>
          ))}
      </div>
      <div style = {{left:"35%",position:"relative",width:"50%"}}>
        <div style={{width:"150px",color:"white",float:"left",paddingTop:"140px",fontSize:"20px"}}>
          Interested?<br></br>
          Contact: 
        </div>
        <div style={{float:"left",width:"300px"}}>
          <Eboardcard bro={{name:"Christian Franquiz",position:"Recruitment Chair",email:"franqc@rpi.edu", src:Recruitmentchairimg}}/>
        </div>
      </div>

    </div>
  )
}
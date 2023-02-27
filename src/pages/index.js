import React from "react"
import ReactDOM from 'react-dom';
import Toolbar from "../components/toolbar"
import Mobilebar from "../components/mobilebar"
import Eboardcard from "../components/eboardcard"
import Button from 'react-bootstrap/Button'
import Stepup from "../../static/src/img/stepuprensselaersign.png"
import {bros} from "../objects/bros.js"
import Application from "../components/app"
import Footer from "../components/footer"
//import Img from "gatsby-image"
//import { useStaticQuery, graphql} from "gatsby"

const eboard = [
  bros[10],
  bros[8],
  bros[7],
  bros[6]

]


export default function Index() {

  
    return (
        <div>
            <Application page="Home"/>
            <Toolbar/> 
            <div className = "imgcontainer">
              <div className = "overlayingtextbox">
                  <div className= "overlayingtext">
                    <div>Phi Iota Alpha Fraternity, Inc.</div>
                    <div>Alpha Chapter</div>
                    <div>Est. 1931</div>
                  </div>
                  
                  
              </div>
              <a href="#firstsection" style={{textDecoration:"none !important"}}>
                <div className="downarrows">
                  <svg class="bi bi-chevron-double-down" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 01.708 0L8 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 01.708 0L8 8.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>
                  </svg>

                </div>
              </a>
            </div>
            <div id="firstsection">

              
              <img id = "stepupimg" src={Stepup}></img>
              
              <div id="firstsectiontext" >
                Our chapter stems from the first Latin American student organization in the United States established at Rensselaer Polytechnic
                Institute in the early 19th century, and has since expanded to form the first Latino Fraternity in the world. <br></br><br></br>
                Phi Iota Alpha was founded for the purpose of effecting the social, economic, and political union of the Latin American nations through the 
                spirit of Pan-Americanism. As well as emphasizing the importance of Latin America's past, we strive to become leaders to promote
                the advancement of Latinos on campus, in the local community, and throughout the hemisphere. <br></br>
                <Button variant="light" href="/about" className="learnmorebutton">Learn more</Button>
              </div>
            </div>
            <div id="indexparallax" className="parallax">
              <div id="indexparallaxoverlay">
                <div id = "candidacytext">
                  <h2 style={{float:"left"}} >Become a Candidate</h2>
                  
                  <Button variant="light" href="/membership" className="membershipbutton">Membership</Button>
                  
                </div>

              </div>
            </div>
            <div id= "brotherindex" >
              <h1>Meet our Eboard!</h1>

              <div id="eboardbox">
                {eboard.map((person,index) => (
                  <Eboardcard bro={person}/>
                ))}
              </div>
              
              <br></br>
              <div className="meetbrobox">
                <h2 style={{color:"white"}}>Meet our brothers!</h2>
                <Button variant="light" href="/brothers" className="brotherbutton">Brothers</Button>
                
              </div>

            </div>
            <Footer/>
            <Mobilebar/>
        </div>
            
    )

}

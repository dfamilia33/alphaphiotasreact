import React from "react"
import ReactDOM from 'react-dom';
import Toolbar from "../components/toolbar"
import Mobilebar from "../components/mobilebar"
import mainpic from "../../static/src/img/mainFIA.jpg"
import Button from 'react-bootstrap/Button'
//import Img from "gatsby-image"
//import { useStaticQuery, graphql} from "gatsby"


export default function Index() {

  
    return (
        <div>
            <Toolbar/> 
            <div className = "imgcontainer">
              <div className = "overlayingtextbox">
                  <div className= "overlayingtext">
                    <div>Phi Iota Alpha Fraternity, Inc.</div>
                    <div>Alpha Chapter</div>
                    <div>Est. 1931</div>
                  </div>
                  <Button variant="outline-dark" href="/about" className="learnmorebutton">Learn more</Button>
                  
              </div>
              <div className="downarrows">
                <svg class="bi bi-chevron-double-down" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 01.708 0L8 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 01.708 0L8 8.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>
                </svg>

              </div>
            </div>
            <Mobilebar/>
        </div>
             
    )

}

ReactDOM.render(<Index/>, document.getElementById('___gatsby'));
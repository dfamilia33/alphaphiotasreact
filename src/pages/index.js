import React from "react"
import ReactDOM from 'react-dom';
import Toolbar from "../components/toolbar"
import mainpic from "../../static/src/img/mainFIA.jpg"
import Button from 'react-bootstrap/Button'
//import Img from "gatsby-image"
//import { useStaticQuery, graphql} from "gatsby"


export default function Index() {

    /*const data = useStaticQuery(graphql`
      query MyQuery {
        file(relativePath: {eq: "mainFIA.jpg"}) {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    `);*/

    //   <Img fluid = {data.childImageSharp.fluid}
    //alt = "Chapter Photo"/>
    //<img src={mainpic} className="homepagepic" alt="Chapter Pohoto"/>
  
    return (
        <div>
            <Toolbar/> 
            <div className = "imgcontainer">
              <div className = "overlayingtext">
                  Phi Iota Alpha Fraternity, Inc. <br></br>
                  Alpha Chapter
                  <Button variant="outline-dark" href="/about">Learn more</Button>
                  
              </div>
              <div className="downarrows">
                <svg class="bi bi-chevron-double-down" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 01.708 0L8 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 01.708 0L8 8.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>
                </svg>

              </div>
            </div>

        </div>
             
    )

}

ReactDOM.render(<Index/>, document.getElementById('___gatsby'));
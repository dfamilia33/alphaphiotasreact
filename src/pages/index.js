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
            </div>

        </div>
             
    )

}

ReactDOM.render(<Index/>, document.getElementById('___gatsby'));
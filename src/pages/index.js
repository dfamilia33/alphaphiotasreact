import React from "react"
import ReactDOM from 'react-dom';
import Toolbar from "../components/toolbar"
import mainpic from "../../static/src/img/mainFIA.jpg"
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
  
    return (
        <div>
            <Toolbar/> 
            <img src={mainpic} className="homepagepic" alt="Chapter Pohoto"/>

        </div>
             
    )

}

ReactDOM.render(<Index/>, document.getElementById('___gatsby'));
import React from "react"
import ReactDOM from 'react-dom';
import Toolbar from "../components/toolbar"
import Img from "gatsby-image"
import { useStaticQuery, graphql} from "gatsby"


export default function Index() {

    const data = useStaticQuery(graphql`
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
    `);

  
    return (
        <div>
            <Toolbar/> 
            <Img fluid = {data.childImageSharp.fluid}
            alt = "Chapter Photo"
            />
        </div>
             
    )

}

ReactDOM.render(<Index/>, document.getElementById('___gatsby'));
import React from "react"
import { Helmet } from "react-helmet"
import alpha from "../../static/src/img/alpha.jpg"

export default class Application extends React.Component {
  
    constructor(props) {
        super(props);
    }
  
    render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`Alpha Phiotas | ${this.props.page}`} </title>
          <link rel="icon" type="image/gif/png" href={alpha} />
        </Helmet>
      </div>
    )
  }
}
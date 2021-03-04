import React from "react"
import Toolbar from "../components/toolbar"
import Application from "../components/app"
import Footer from "../components/footer"
import paypal from "../../static/src/img/paypal.png"
import Button from 'react-bootstrap/Button'


export default function Alumni() {
  


    return (
      <div>
      <Application page="Alumni"/>
        <Toolbar page="alumni"/>
        <div id="alumniheader">
          <div id="alumniparallax" className="parallax">
              <h2 className="overheader">Alumni</h2>       
          </div>
        </div>
        <div style={{color: `white`,textAlign:"center", height:"50vh"}}>
          <h1 style={{ margin:"50px",textShadow: "0px 0px 5px white" }}>Alumni Weekend 2021</h1>
          <p>Details To Be Announced...</p>
        </div>




        <div style={{height:"50vh"}}>
          <h4 style={{color:"white",textAlign:"center"}}> Make a Contribution</h4>
          <div className="flex-paypal" style={{ width:"50%", marginLeft:"25%",marginRight:"25%"}}>
              <img style={{width:"300px"}} src={paypal} alt= "Paypal logo"></img>
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_donations" />
                  <input type="hidden" name="business" value="treasurer@phiota.net" />
                  <input type="hidden" name="currency_code" value="USD" />
                  
                  <Button type="submit" color="primary">Donate</Button>
                  
              </form>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
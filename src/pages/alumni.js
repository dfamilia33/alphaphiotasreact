import React from "react"
import Toolbar from "../components/toolbar"
import Application from "../components/app"
import Footer from "../components/footer"
import paypal from "../../static/src/img/paypal.png"


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
        <div style={{height:"85vh"}}>
            <img style={{width:"300px"}} src={paypal} alt= "Paypal logo"></img>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="dfamilia33@gmail.com" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </div>
        <Footer/>
      </div>
    )
  }
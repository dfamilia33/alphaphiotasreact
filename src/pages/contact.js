import React from "react"
import Toolbar from "../components/toolbar"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {bros} from "../objects/bros.js"
import Form from 'react-bootstrap/Form'
import Eboardcard from "../components/eboardcard"
import Application from "../components/app"
import Footer from "../components/footer"

const chairs = [
  bros[1], bros[3], bros[10],bros[8],bros[11],bros[5],bros[9],bros[0]
]


export default class Contact extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      selected: bros[4],
    };

    this.select = this.select.bind( this );
  }


  render () {
    return (
  
      <div >
      <Application page="Contact"/>
        <Toolbar page="contact"/>
        <div className="contactheader" >
          <div id="contactparallax" className="parallax"> 
            <h2 className="overheader">Contact</h2>          
          </div>
        </div>

        
        <div className ="contactfield">
          <Form.Control
            ref={ ref => this.selector = ref }
            as="select"
            className="my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            custom
            style={{width:"200px"}}
            onChange={() => this.select(this.selector.selectedIndex)}
          >
            
            <option value="1">General</option>
            <option value="2">Alumni Relations</option>
            <option value="3">Community Service</option>
            <option value="4">Fundraising Efforts</option>
            <option value="5">Public Relations</option>
            <option value="6">Recruitment/Rush</option>
            <option value="7">Social Events</option>
            <option value="8">Web</option>
          </Form.Control>
        </div>

        { this.state.selected &&
                

          <Eboardcard style={{float:"left"}} bro={this.state.selected} />

          
        }
        <Footer/>
      </div>

    )
  }

  select(val) {
    if (val != 'undefined') {
      this.setState({selected: chairs[val]})
    }
  }


}
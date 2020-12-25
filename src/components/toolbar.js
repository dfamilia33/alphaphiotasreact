import React from "react"
import styled,{ css } from 'styled-components'
import logo from "../../static/src/img/phiotalogo.png"
import Hamburger from "./hamburger"
import "../../static/src/css/icon.css"









const A = styled.a`
	display: block; 
	padding: 0px;
	display: block;
	color: white;
	text-align: center;
	padding: 0px 16px;
	text-decoration: none !important;
	&:hover {
		color: #BC9307;
	}

	${props => props.selected && css`
		color: #BC9307;
  	`}

`;

// style={{color:`${this.props.page == "about" ? "#BC9307" :"#white"  }`}}




export default class Toolbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true
		};
	}

	toggle = ()=> this.setState({ hidden: !this.state.hidden })
	

	render() {
		
		return (
			
			<div className = "Navbox">
				<div>
					<div className="Menu" onClick={()=>this.toggle()}><Hamburger ></Hamburger></div>
					<div className="Logo"><a href="/"><img src={logo} width="200" height="60" data-retina="true" alt="Phi Iota Alpha"></img></a></div>
					
					
					<ul className="Ulist">
						<li className ="Listitem Leftitem" style = {{borderBottomColor: `${this.props.page == "about" ? "#BC9307" :"#b30000"  }` }}><a className="A" style={{color:`${this.props.page == "about" ? "#BC9307" :"#white"  }`}} href="/about">About Us</a></li>
						<li className ="Listitem Leftitem" style = {{borderBottomColor: `${this.props.page == "brothers" ? "#BC9307" :"#b30000"}` }}><a className="A" style={{color:`${this.props.page == "brothers" ? "#BC9307" :"#white"  }`}} href="/brothers">Brothers</a></li>
						<li className ="Listitem Leftitem"  style = {{borderBottomColor: `${this.props.page == "membership" ? "#BC9307" :"#b30000"}` }}><a className="A" style={{color:`${this.props.page == "membership" ? "#BC9307" :"#white"  }`}} href="/membership">Membership</a></li>
						<li className ="Listitem Leftitem"  style = {{borderBottomColor: `${this.props.page == "alumni" ? "#BC9307" :"#b30000"}` }}><a className="A" style={{color:`${this.props.page == "alumni" ? "#BC9307" :"#white"  }`}} href="/alumni">Alumni</a></li>
						<li className ="Listitem Rightitem" style = {{borderBottomColor: `${this.props.page == "contact" ? "#BC9307" :"#b30000"}` }}><a className="A" style={{color:`${this.props.page == "contact" ? "#BC9307" :"#white"  }`}} href="/contact">Contact</a></li>
						<li className ="Listitem Rightitem social"><a className="A"  href="https://www.facebook.com/alphaphiota/" target="_blank"><i className="fa fa-facebook-square" ></i></a></li>
						<li className ="Listitem Rightitem social"><a ClassName="A" id="instalink" href="https://www.instagram.com/alphaphiotas/?hl=en" target="_blank" ><i class="fa fa-instagram"></i></a></li>
					</ul>
				</div>
				<div className="Mobilelinks" style={{display:`${this.state.hidden ? "none" : "block"}` }}>
					<ul className="Ulist">
						<li className="Vertli" style={{paddingTop:"16px"}}><a  href="/about">About Us</a></li>
						<hr></hr>
						<li className="Vertli"><a href="/brothers">Brothers</a></li>
						<hr></hr>
						<li className="Vertli"><a href="/membership">Membership</a></li>
						<hr></hr>
						<li className="Vertli"><a href="/alumni">Alumni</a></li>
						<hr></hr>
						<li className="Vertli Lastvert"><a href="/contact">Contact</a></li>
					</ul>

				</div>
				
			</div>
		)
	}
}


//facebook and instagram icons wont load, preferably I'd like them all the way to the right on the toolbar.
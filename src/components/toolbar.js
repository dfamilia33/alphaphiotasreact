import React from "react"
import styled from 'styled-components'
import logo from "../../static/src/img/phiotalogo.png"
import Hamburger from "./hamburger"
import "../../static/src/css/icon.css"


const Menu = styled.div`
	float: right;
	height: 60px;
	line-height: 60px;
	@media (min-width: 768px) {
		display: None;
	}

`


const Navbox = styled.div`
	-webkit-box-shadow: 0 8px 20px -10px #cccccc;
    -moz-box-shadow: 0 8px 20px -10px #cccccc;
    box-shadow: 0 10px 20px -16px #cccccc;
	background-color: #b30000;

`


const Ulist = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	
`;

const Listitem = styled.li`
	display: inline;
	border-style: solid;
	border-color: #b30000;
	border-bottom: 3px solid transparent;
	border-left: none;
  	border-right: none;
	&:hover {
		border-bottom-color: #BC9307;
	}
	&:active {
		border-bottom-color: #BC9307;
	}
`
const Leftitem = styled(Listitem)`
	float: left;
	height: 60px;
	line-height: 60px;
	@media (max-width: 768px) {
		display: none;
	}
			
`;

const Rightitem = styled(Listitem)`
	float: right;
	height: 60px;
	line-height: 60px;
	@media (max-width: 768px) {
		display: none;
	}
`

const Logo = styled.div`
	@media (min-width: 768px) {
		float: left;
	}

`

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
	&:active {
		color: #BC9307;
	}

`;




const Mobilelinks = styled.div`
	display: ${props => props.display };
	background-color: #800000;
	@media (min-width: 768px) {
		display: None;
	}
`

const Vertli = styled.li`
	font-size:24px;


`
const Lastvert = styled(Vertli)`
	padding-bottom: 16px;

`



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
			
			<Navbox>
				<div>
					<Menu onClick={()=>this.toggle()}><Hamburger ></Hamburger></Menu>
					<Logo><a href="/"><img src={logo} width="200" height="60" data-retina="true" alt=""></img></a></Logo>
					
					
					<Ulist>
						<Leftitem><A href="/about">About Us</A></Leftitem>
						<Leftitem><A href="/brothers">Brothers</A></Leftitem>
						<Leftitem><A href="/membership">Membership</A></Leftitem>
						<Rightitem><A href="/contact">Contact</A></Rightitem>
					</Ulist>
				</div>
				<Mobilelinks display={this.state.hidden ? "none" : "block"}>
					<Ulist>
						<Vertli><A href="/about">About Us</A></Vertli>
						<hr></hr>
						<Vertli><A href="/brothers">Brothers</A></Vertli>
						<hr></hr>
						<Vertli><A href="/membership">Membership</A></Vertli>
						<hr></hr>
						<Lastvert><A href="/contact">Contact</A></Lastvert>
					</Ulist>

				</Mobilelinks>
				
			</Navbox>
		)
	}
}


//facebook and instagram icons wont load, preferably I'd like them all the way to the right on the toolbar.
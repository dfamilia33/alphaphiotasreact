import React from "react"
import styled from 'styled-components'
import logo from "../../static/src/img/phiotalogo.png"


const Navbox = styled.div`
	-webkit-box-shadow: 0 8px 20px -10px #BC9307;
    -moz-box-shadow: 0 8px 20px -10px #BC9307;
    box-shadow: 0 10px 20px -16px #BC9307;

`


const Ulist = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #b30000;
`;

const Listitem = styled.li`
	display: inline;

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

const Logo = styled(Listitem)`
	@media (min-width: 768px) {
		float: left;
	}

`
const Hamburgerbar = styled.div`
	width: 35px;
	height: 5px;
	background-color: black;
	margin: 6px ;

`

const Mobileli = styled.li`
	float: left;
	height: 60px;
	line-height: 60px;
	@media (min-width: 768px) {
		display: none;
	}

`;

const A = styled.a`
	display: block; 
	padding: 0px;
	display: block;
	color: white;
	text-align: center;
	padding: 0px 16px;
	text-decoration: none;

	&:hover {
		color: #BC9307;
	}

`;



export default function Toolbar() {


	return (
		
		<Navbox>
			<Ulist>
				<Mobileli>
					<div>
						<Hamburgerbar></Hamburgerbar>
						<Hamburgerbar></Hamburgerbar>
						<Hamburgerbar></Hamburgerbar>
					</div>
				</Mobileli>
				<Logo><A href="/"><img src={logo} width="200" height="60" data-retina="true" alt=""></img></A></Logo>
				<Leftitem><A href="/about">About Us</A></Leftitem>
				<Leftitem><A href="/brothers">Brothers</A></Leftitem>
				<Leftitem><A href="/membership">Membership</A></Leftitem>
				<Rightitem><A href="/contact">Contact</A></Rightitem>
			</Ulist>
		</Navbox>
	)

}


//facebook and instagram icons wont load, preferably I'd like them all the way to the right on the toolbar.
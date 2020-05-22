import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components'

const A = styled.a`
    margin: 5px;

`


export default function Moiblebar(){

    return (
        <Navbar id="mobilebar" bg="dark" className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none justify-content-center">
            
            <div className="vl"></div>
            <A href="https://www.facebook.com/alphaphiota/" target="_blank"><i className="fa fa-facebook-square" style={{fontSize:36,color:"#b30000"}} ></i></A>
            <div className="vl"></div>
            <A href="https://www.instagram.com/alphaphiotas/?hl=en" target="_blank" ><i class="fa fa-instagram" style={{fontSize:36,color:"#b30000"}}></i></A>
            <div className="vl"></div>
        </Navbar>


    )

}
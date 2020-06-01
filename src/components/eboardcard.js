import React from "react"
import Image from 'react-bootstrap/Image'


export default function Eboardcard(props){

    return (
        <div className="eboardcard" >
            <Image className="eboardpic" src={props.bro.src} roundedCircle />
            <div className="eboardcardtext">
                <div style={{marginTop:"20px"}}>{props.bro.name}</div>
                <div >{props.bro.position}</div>
                {   props.bro.email != undefined && 
                    (
                        <i class="fa fa-envelope" style={{fontSize:"36px"}}></i>
                    )

                }
            </div>
        </div>

    )
}
import React from "react"
import Card from 'react-bootstrap/Card'


export default function BootstrapCard(props) {

    let src = "https://via.placeholder.com/400x400.png?text=Placeholder";

    if (props.bro.src !== undefined){
        src = props.bro.src;
    }

    /*return (  
        <Card style={{ width: '18rem',margin:20 }} bg={"dark"} text={"white"}>
            <Card.Img variant="top" src= {src} />
            <Card.Footer>{props.bro.name}</Card.Footer>
        </Card>
    )*/

    return(
        <div className="card bg-dark text-white" style={{width: "18rem", margin: "20px"}}>
          <div className="brotherimgbackdrop card-img-top" style={{backgroundImage:`url("${src}")`}}>
            <div className="brotheroverlay" style={{overflow:"hidden"}}>
              <div style={{color:"white", padding:20}}>
                <div style={{float:"left",width:110}}>Brother Name:</div><div style={{float:"left", width:130}}>{props.bro.bname}</div>
                <div style={{float:"left",width:40}}>Line:</div><div style={{float:"left",width:200}}>{props.bro.line}</div> 
                <div style={{float:"left",width:50}}>Major:</div><div style={{float:"left",width:190}}>
                  <ul style={{listStyleType: "none", padding:0,margin:0}}>
                    {props.bro.major.map((major,index) => ( 
                        <li>{major}</li>
                    ))}
                  </ul>
                </div>
                <div style={{float:"left",width:90}}>Graduation:</div><div style={{float:"left",width:150}}>{props.bro.graduation}</div>
                <div style={{float:"left",width:90}}>Hometown:</div><div style={{float:"left",width:150}}>{props.bro.hometown}</div>
                <div style={{float:"left",width:90}}>Nationality:</div><div style={{float:"left",width:150}}>   
                  <ul style={{listStyleType: "none", padding:0,margin:0}}>
                    {props.bro.nationality.map((nationality,index) => ( 
                        <li>{nationality} <img src={props.bro.flagsrc[index]} alt={`${nationality} Flag`} style ={{width: 20,height:15}}/> </li> 
                    ))}
                  </ul>
                </div> 
              </div>
            </div>
          </div>
          <div className="card-footer">{props.bro.name}</div>    
        </div>
    )

}
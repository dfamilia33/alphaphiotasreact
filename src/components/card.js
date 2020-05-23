import React from "react"
import Card from 'react-bootstrap/Card'


export default function BootstrapCard(props) {

    let src = "https://via.placeholder.com/400x400.png?text=Placeholder";

    if (props.bro.src != undefined){
        src = props.bro.src;
    }

    return (  
        <Card style={{ width: '18rem',margin:10 }} bg={"dark"} text={"white"}>
            <Card.Img variant="top" src= {src} />
            <Card.Footer>{props.bro.name}</Card.Footer>
        </Card>
    )

}
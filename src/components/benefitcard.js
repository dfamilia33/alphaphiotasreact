import React from "react"
import Card from 'react-bootstrap/Card'


export default function Benefitcard(props){


    return (
        <Card className="benefitcard" style={{ width: '18rem',backgroundColor:`${props.item.color}` }}>
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{props.item.title} </Card.Title>
          <Card.Text>
            {props.item.text}
          </Card.Text>
        </Card.Body>
      </Card>

    )


}
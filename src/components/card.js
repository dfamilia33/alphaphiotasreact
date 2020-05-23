import React from "react"
import Card from 'react-bootstrap/Card'


export default function BootstrapCard(props) {

    return (  
        <Card style={{ width: '18rem',margin:10 }}>
            <Card.Img variant="top" src="https://via.placeholder.com/400x400.png?text=Placeholder" />
            <Card.ImgOverlay>
                Overlay Placeholder - will show brother info onHover()
            </Card.ImgOverlay>
            <Card.Footer>{props.bro.name}</Card.Footer>
        </Card>
    )

}
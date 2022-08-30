import React from 'react'
import { Card } from 'react-bootstrap'

function CardDetails() {
    return (
        <div>
            <div style={{marginLeft:"15%", width:"70%"}}>
                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <button variant="primary">Go somewhere</button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default CardDetails
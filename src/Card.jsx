import React from 'react'
import { Card, Col } from 'react-bootstrap';
/**
* @author
* @function CardComp
**/

export const CardComp = ({imgSrc, firstName, lastName, email, userId}) => {
    return (
        <Col lg={4} md={6} sm={12}>
        <Card>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
                <Card.Title style={{fontWeight: "800"}}>{firstName} {lastName}</Card.Title>
                <Card.Text className="mt-2">
                 <a href={`mailto:${email}`}>{email}</a> <br />
                 User ID: {userId}
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    )
}

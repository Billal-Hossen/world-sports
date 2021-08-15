import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const TeamDetails = (props) => {
    const {idTeam}=props.team;
    return (
        <div className="col-md-3 my-3">
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title{idTeam}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
             </Card>
        </div>
    );
};

export default TeamDetails;
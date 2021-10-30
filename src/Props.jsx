import React from "react";
// import Image1 from './img1.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cards1=(props)=>{
     return(
       <>
       import { Button } from 'react-bootstrap';
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
        {props.desc}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{props.button}</small>
      </Card.Footer>
    </Card>
    </>
);
    
};
export default Cards1; 

import React from "react";


import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import First from './images/img1.jpg';
import Second from './images/img2.jpg';
import Third from './images/img3.jpg';

const Carousels=()=>{
    return(
        <>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={First}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Second}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Third}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
        </>
    )
}
export default Carousels;
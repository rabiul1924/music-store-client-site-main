import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Review.css'
const Review = () => {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
        <img src="/sponsor1.jpg" className="d-block w-100" height="250px" width="50px" alt="sponsor" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img src="/sponsor2.jpg" className="d-block w-100" height="250px" width="250px" alt="sponsor" />     
        </Carousel.Item>
        <Carousel.Item interval={500}>  
        <img src="/sponsor3.jpg" className="d-block w-100" height="250px" width="250px" alt="sponsor" />    
        </Carousel.Item>
        <Carousel.Item interval={500}>  
        <img src="/sponsor4.jpg" className="d-block w-100" height="250px" width="250px" alt="sponsor" />    
        </Carousel.Item>
        <Carousel.Item interval={500}>  
        <img src="/sponsor5.jpg" className="d-block w-100" height="250px" width="250px" alt="sponsor" />    
        </Carousel.Item>
      </Carousel>
    );
};

export default Review;
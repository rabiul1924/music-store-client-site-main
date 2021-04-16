import React from 'react';
import img from '../../../images/customer.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
const Review = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <p> <FontAwesomeIcon className="text-primary" icon={faStar}/> 
            <FontAwesomeIcon className="text-primary" icon={faStar}/>
            <FontAwesomeIcon className="text-primary" icon={faStar}/>
            <FontAwesomeIcon className="text-primary" icon={faStar}/>
            <FontAwesomeIcon className="text-primary" icon={faStarHalfAlt}/>

         
            <span style={{border:'5px solid red', margin:'5px', padding:'5px'}}>4.5/5</span>
             
            
            </p>
        </div>
    );
};

export default Review;
import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';

const testimonialData = [
    {
        review : "Very good instrument they serve to me.Guitar's quality and look decent.I am very happy for their service",
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        review : "Very good instrument they serve to me.Guitar's quality and look decent.I am very happy for their service",
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        review : "Very good instrument they serve to me.Guitar's quality and look decent.I am very happy for their service",
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h4 className="text-primary text-uppercase text-center" >Testimonial</h4>
                   <h1 className="text-danger text-uppercase text-center">What Our Customer <br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;
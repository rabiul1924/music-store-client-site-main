import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';




const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h4 className="text-primary text-uppercase text-center" >Testimonial</h4>
                   <h1 className="text-danger text-uppercase text-center">What Our Customer <br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviews.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;
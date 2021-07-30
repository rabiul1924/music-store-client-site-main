import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Autoplay, Pagination, Navigation]);



const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        fetch('https://intense-hamlet-83372.herokuapp.com/reviews')
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
               <div className="card-deck mt-5 mb-5">
               <Swiper
                      spaceBetween={50}
                       slidesPerView={1}
                         onSlideChange={() => console.log('slide change')}
                          onSwiper={(swiper) => console.log(swiper)}
                          autoplay={{ delay: 2500, disableOnInteraction: false }}
                          navigation={true}
                          loop={true}
                          pagination={{ clickable: true }}
                  >
                       {
                        reviews.map(testimonial => <SwiperSlide><Testimonial testimonial={testimonial} key={testimonial.name}/></SwiperSlide>)
                       }
                            </Swiper>
                    
                </div>
           </div>
       </section>
    );
};

export default Testimonials;
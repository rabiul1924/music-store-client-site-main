import React from 'react';
import Guitar1 from '../../../images/guitar1.jpeg';
import Guitar2  from '../../../images/guitar2.jpg';
import Guitar3 from '../../../images/guitar3.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fender Stratocaster',
        img: Guitar1 ,
        price: 100000
    },
    {
        name: 'Martin D-45',
        img: Guitar2,
        price: 12000
    },
    {
        name: 'Fender Telecaster',
        img: Guitar3,
        price: 20000
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h4 style={{color: 'darkblue'}}>OUR SERVICES</h4>
                <h2 style={{color: 'red'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;
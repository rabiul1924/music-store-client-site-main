import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [books, setBooks] = useState([]);

    useEffect (()=> {
        fetch('http://localhost:5000/book')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h4 style={{color: 'darkblue'}}>OUR SERVICES</h4>
                <h2 style={{color: 'red'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    books.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;
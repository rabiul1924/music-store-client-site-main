import React from 'react';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center body ">
            <img  style={{height: '150px', margin:'15px', padding:'10px'}} src={service.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <h5 className="mt-3 mb-3">{service.price}Tk</h5>
            <p> {service.description}</p>
          <button className="btn btn-danger mb-5">For Buy</button>
        </div>
    );
};

export default ServiceDetail;
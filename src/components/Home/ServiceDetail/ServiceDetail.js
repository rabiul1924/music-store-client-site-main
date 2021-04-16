import React from 'react';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center body">
            <img style={{height: '150px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <h5 className="mt-3 mb-3">{service.price}Tk</h5>
            <p className="text-secondary">For most guitar enthusiasts today, this is what “playing the guitar” means: the snap and brightness of a 6-string steel, which has strong projection and durability. Many guitarists favor the versatility and clarity of dreadnoughts, but especially singer-songwriters.

The Martin D-45 is one of the most common types of acoustic guitars. Check out Neil Young playing a well-loved song that he added to the Rock n’ Roll tradition, below.</p>
          <button className="btn btn-danger">For Buy</button>
        </div>
    );
};

export default ServiceDetail;
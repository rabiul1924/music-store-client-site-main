import React from 'react';
import { Image } from 'react-bootstrap';


const Testimonial = (props) => {
    const {name, address , description, imageURL} = props.testimonial;
    return (
        <div className="mt-5 mb-5" style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "gray",
          }}>
             <Image src={imageURL} roundedCircle style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }} />
       <h6 className="text-primary">{name}</h6>
       <p className="m-0 text-danger">{address}</p>
        <p className="card-text text-center text-dark">{description}</p>

        </div>
    );
};

export default Testimonial;
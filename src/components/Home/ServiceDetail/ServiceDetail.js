import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServiceDetail.css'

const ServiceDetail = (props) => {
    // console.log("check", props.service);
    const {_id, name, description, price, imageURL } = props.service;
    const history = useHistory()
    const handleBuyNow = id => {
      console.log(id);
      const url = `book/${id}`
      history.push(url)
    }
    return (
        <div className="col-md-4  service-body">
            <div className='content'>
                <div className="card mb-4">
                    <div className="box" onClick={()=>handleBuyNow(_id)}>
                        <img className="service-img" src={imageURL} alt="" />
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <h3>{price}</h3>
                        {<Button className="btnStyle mb-5" variant="primary" onClick={()=>handleBuyNow(_id)}>Buy Now</Button>}
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default ServiceDetail;
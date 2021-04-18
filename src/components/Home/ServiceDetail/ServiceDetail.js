import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServiceDetail.css'

const ServiceDetail = (props) => {
    console.log("check", props.service);
    const {_id, name, description, price, imageURL } = props.service;
    const history = useHistory()
    const handleBuyNow = id => {
      console.log(id);
      const url = `book/${id}`
      history.push(url)
    }
    return (
        <div className="col-md-4 text-center body ">
            <img className="boxy"  style={{height: '150px', margin:'15px', padding:'10px'}} src={imageURL} alt="" />
            <h5 className="mt-3 mb-3">{name}</h5>
            <h5 className="mt-3 mb-3">{price}Tk</h5>
            <p> {description}</p>
            {<Button className="btnStyle mb-5" variant="primary" onClick={()=>handleBuyNow(_id)}>Buy Now</Button>}
        </div>
    );
};

export default ServiceDetail;
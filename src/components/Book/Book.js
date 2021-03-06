import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App.js';
import CheckoutPage from '../CheckOutPage/CheckoutPage.js';
import Sidebar from '../Dashboard/Sidebar/Sidebar.js';




const Book = () => {
    const { _id } = useParams()
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [detail, setDetail] = useState([])
    useEffect(() => {
        const url = `https://intense-hamlet-83372.herokuapp.com/book/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [_id]);
    console.log(detail);
    const { id, name, description, price} = detail;

    const handleCheckout = () => {
      alert('Check Your Order in Book List')
        const orderInfo = { name, price, description, ...loggedInUser, orderTime: new Date() }
        const url = `https://intense-hamlet-83372.herokuapp.com/addOrders`
    
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderInfo)
        })
          .then(res => console.log('server side response', res))
      }
    return (
        <section>
            <div className="container-fluid row">   
              <Sidebar></Sidebar>         
                    <div className="col-12 col-sm-12 col-md-10 p-4 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                 <Table responsive="sm" striped bordered hover variant="dark">
                  <thead>
                          <tr>
                             <th>#</th>
                             <th>User id</th>   
                          <th>Product Name</th>
                          <th>description</th>
                         <th>Price</th>
                           </tr>
                   </thead>
                     <tbody>
                        <tr>
                        <td>{id}</td>
                         <td>{_id}</td>
                          <td>{name}</td>
                          <td>{description}</td>
                          <td>${price}</td>
                      </tr>
                        <tr>
                           <td></td>
                    <td colSpan="3">Total</td>
                    <td>${price}</td>
                     </tr>
                    </tbody>
              </Table> 
              <div className="d-flex justify-content-center align-items-center">
            <CheckoutPage/>
            <div>  <button className="d-block h-auto btn btn-primary" onClick={handleCheckout}>Checkout</button></div>
                  
            </div>
                </div>
            </div>
          
            
        </section>
    );
};

export default Book;
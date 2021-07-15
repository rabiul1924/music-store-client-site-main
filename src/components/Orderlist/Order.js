/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { UserContext } from '../../App.js';
import Sideposter from '../Admin/Sideposter/Sideposter.js';
import Table420 from '../Table420/Table420.js';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    const [orderList , setOrderList] = useState([])
    useEffect(()=>{
        fetch('https://intense-hamlet-83372.herokuapp.com/order')
        .then ((res)=> res.json())
        .then((data) =>setOrderList(data))
    }, [orderList])
    
    return (
        <section>
            <div className="container-fluid row">
                    <Sideposter></Sideposter>
                <div className="col-12 col-sm-12 col-md-10">
                <Row>
                <Col>
                    <Row>
                        <Col md={6}>
                            <h3 className="text-center">Order Total:{orderList.length}{" "}</h3>
                            
                        </Col>
                        <Col md={6}>
                            <h2 className="text-center text-danger">This Order Made by: {loggedInUser.email}</h2>
                        </Col>
                    </Row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th className="bg-primary">Product Name</th>
                                <th className="bg-warning">Pay with</th>
                                <th className="bg-danger">Price</th>
                                <th className="bg-danger">Email</th>
                                <th className="bg-warning">Status</th>
                            </tr>
                        </thead>
                    </Table>
                    {orderList.map((singleOrder) => {
                        return (
                            <div>

                                <div className="container">
                                    <Table420 singleOrder={singleOrder}></Table420> 
                                   
                                </div>
                            </div>
                        );
                    })}
                </Col>
            </Row>
                </div>
              
            </div>
        </section>
    );
};

export default Order;
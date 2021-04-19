/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { UserContext } from '../../App.js';
import Sideposter from '../Admin/Sideposter/Sideposter.js';
import Table420 from '../Table420/Table420.js';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("https://intense-hamlet-83372.herokuapp.com/order")
            .then((res) => res.json())
            .then((data) => filterOrders(data));
    }, []);
    const filterOrders = (data) => {
        const filterData = data.filter(
            (order) => order.email == loggedInUser.email
        );
        setOrders(filterData);
    };

    const {_id}  = orders || {}
    console.log(orders._id)

    const deleteCase = (event, id) => {
        // const url = `https://hidden-headland-12235.herokuapp.com/delete/${id}`;
        // fetch(url, {
        //   method: "DELETE",
        // })
        //   .then((res) => res.json())
        //   .then((result) => {
        //     console.log("delete");
        //   });
        // window.location.reload(false);
        console.log(id)
      };
      console.log(_id)
    
    return (
        <section>
            <div className="row">
                <div className="col-md-5 col-sm-6 col-12">
                    <Sideposter></Sideposter>
                </div>
                <div className="col-md-7 col-sm-12 col-12 d-flex justify-content-center">
                <Row>
                <Col>
                    <Row>
                        <Col md={6}>
                            <h3 className="text-center">Order Total:{orders.length}{" "}</h3>
                        </Col>
                        <Col md={6}>
                            <h2 className="text-center text-danger">This Order Made by: {loggedInUser.email}</h2>
                        </Col>
                    </Row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th className="bg-primary">Product Name</th>
                                <th className="bg-warning">Quantity</th>
                                <th className="bg-warning">Pay with</th>
                                <th className="bg-danger">Price</th>
                                <th className="bg-warning">Status</th>
                            </tr>
                        </thead>
                    </Table>
                    {orders.map((singleOrder) => {
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
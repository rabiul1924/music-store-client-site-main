import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App.js';
import Sidebar from '../Dashboard/Sidebar/Sidebar.js';

const Comment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onClick = test => 
    {
        const reviewData = {
            name: test.name,
            price: test.companyName,
            description:test.description,
            
        };
        // console.log(eventData)

        const url =`http://localhost:5000/comment`

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewData),
        })
        .then((res) => console.log("server side response", res));
      
    };
    
    return (
        <section>
            <div className="row">
                <div className="col-md-5 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7 col-sm-12 col-12 d-flex justify-content-center">
                <h3 style={{ textAlign: "center" }}>Reviews</h3>
            <Form onSubmit={handleSubmit(onClick)}>
                <Form.Group>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        name="name"
                        placeholder="Product Name"
                        ref={register}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        name="companyName"
                        placeholder="companyName"
                        ref={register}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product description</Form.Label>
                    <Form.Control
                        name="description"
                        placeholder="description"
                        ref={register}
                    />
                </Form.Group>
               
                <input className="btn btn-primary" type="submit" />
            </Form>
                </div>
              
            </div>
        </section>
    );
};

export default Comment;
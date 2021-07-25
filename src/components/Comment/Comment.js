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

        const url =`https://intense-hamlet-83372.herokuapp.com/comment`

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
            <div className="container-fluid row">
                    <Sidebar></Sidebar>
                    <div className="col-12 col-sm-12 col-md-10 p-4 pr-5" style={{backgroundColor: "#F4FDFB" }}>
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
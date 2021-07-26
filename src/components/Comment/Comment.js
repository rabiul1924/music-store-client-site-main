import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App.js';
import Sidebar from '../Dashboard/Sidebar/Sidebar.js';

const Comment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit } = useForm();

    const onClick = test => 
    {
        alert('Thank For your valuable review')
        const reviewData = {
            name: test.name,
            address: test.address,
            description:test.description,
            imageURL: imageURL
            
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

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "9394744de9f3b381753ece25a7534a0b");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
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
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        name="address"
                        placeholder="address"
                        ref={register}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your Valuable Comment</Form.Label>
                    <Form.Control
                        name="description"
                        placeholder="description"
                        ref={register}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control
                        name="exampleRequired"
                        type="file"
                        onChange={handleImageUpload}
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
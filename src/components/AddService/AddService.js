
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App.js';
import Sideposter from '../Admin/Sideposter/Sideposter.js';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => 
    {
        const eventData = {
            name: data.name,
            price: data.price,
            description:data.description,
            imageURL: imageURL,
        };
        // console.log(eventData)

        const url =`https://intense-hamlet-83372.herokuapp.com/addService`

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(eventData),
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
        <div className="row">
            <div className="col-md-4 col-sm-6 col-12">
                <Sideposter></Sideposter>
            </div>
            <div className="col-md-8 col-sm-12 col-12 d-flex justify-content-center">
            <h3 style={{ textAlign: "center" }}>Add Product</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Product name</Form.Label>
                    <Form.Control
                        name="name"
                        placeholder="Product Name"
                        ref={register}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product price</Form.Label>
                    <Form.Control
                        name="price"
                        placeholder="price"
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

export default AddService;
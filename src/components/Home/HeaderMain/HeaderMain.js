import React from 'react';
import { Button } from 'react-bootstrap';


const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center justify-content-center">
            <div className="col-md-4 offset-md-1 text-center">
                <h1 style={{color: 'white'}}>Music is joy <br/> Of LIfe</h1>
                <p style={{color: 'white'}}>Music can change your mood in a second.Music is everywhere just you have to find it.</p>
                <Button className="btn btn-danger" href="/">Details</Button>
            </div>
           
        </main>
    );
};

export default HeaderMain;
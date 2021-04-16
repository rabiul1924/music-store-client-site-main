import React from 'react';


const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center justify-content-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: 'white'}}>Music is joy <br/> Of LIfe</h1>
                <p style={{color: 'white'}}>Music can change your mood in a second.Music is everywhere just you have to find it.</p>
                <button className="btn btn-danger">Details</button>
            </div>
           
        </main>
    );
};

export default HeaderMain;
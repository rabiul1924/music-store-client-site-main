import React, { useContext, useState } from 'react';
import { UserContext } from '../../App.js';
import Sideposter from '../Admin/Sideposter/Sideposter.js';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({});

  const handleBlur = (e) => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
    console.log(newAdmin)
  };

  const handleSubmit = (e) => {
    const addNewAdmin = {
      email: admin.email,
    };
    console.log(addNewAdmin);
    e.preventDefault()
    const url = `https://intense-hamlet-83372.herokuapp.com/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewAdmin),
    });
  };
    return (
        <section>
        <div className="container-fluid row">
                <Sideposter></Sideposter>
            <div className="col-12 col-sm-12 col-md-10 p-5 ">
                <div className="row">
                  
                <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onBlur={handleBlur}
                type="email"
                className="form-control"
                name="email"
                placeholder="ADD ADMIN"
              />
            </div>

            <button type="submit" className="btn btn-info text-white">
              Submit
            </button>
          </form>
              
             </div>
            </div>
          
        </div>
    </section>
    );
};

export default MakeAdmin;
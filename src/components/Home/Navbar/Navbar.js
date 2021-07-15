import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App.js';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://intense-hamlet-83372.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAdmin(data);
      });
  }, []);
    return (
     
        <nav className="navbar navbar-expand-lg navbar-dark">

          <h1 style={{color:'white'}}>MUSIC WORLD</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5 text-white" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    {isAdmin && <li className="nav-item">
                    <Link className="nav-link mr-5 text-white" to="/admin">Admin</Link>
                    </li>}
                    <li className="nav-item">
                    <Link className="nav-link mr-5 text-white" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">Contact Us</a>
                    </li>
                   {loggedInUser.isSignedIn ?  <li className="nav-item" onClick={() => setLoggedInUser({})}>
                    <Link className="nav-link mr-5 text-white">LogOut</Link>
                    </li> :  <li className="nav-item">
                    <Link className="nav-link mr-5 text-white" to="/login">Login</Link>
                    </li>}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
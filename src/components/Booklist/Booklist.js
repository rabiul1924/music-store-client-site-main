import { Card } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App.js';
import Sidebar from '../Dashboard/Sidebar/Sidebar.js';
import Order from '../Orderlist/Order.js';

const Booklist = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch(
      "https://intense-hamlet-83372.herokuapp.com/cases?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);
    return ( 
        <section>
        <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-12 col-sm-12 col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
              <h2 className="text-primary">Booking list!!</h2>
              {cases.map(getOrder=> <Card className="text-info"> Name:{getOrder.name} <br/> Price:{getOrder.price}tk <br/> Description:{getOrder.description}</Card>
              )}
            </div>
          
        </div>
    </section>
       
 
    );
};

export default Booklist;
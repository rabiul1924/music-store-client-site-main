import React, { useContext } from 'react';
import { UserContext } from '../../../App.js';
import Sideposter from '../Sideposter/Sideposter.js';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
        <div style={containerStyle} className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sideposter></Sideposter>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
              <h1>Admin panel</h1>
            </div>
          
        </div>
    </section>
    );
};

export default Admin;
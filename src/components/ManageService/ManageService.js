import React, { useContext } from 'react';
import { UserContext } from '../../App.js';
import Sideposter from '../Admin/Sideposter/Sideposter.js';

const ManageService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
        <div className="container-fluid row">
                <Sideposter></Sideposter>
                <div className="col-12 col-sm-12 col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
              <h2 className="text-primary">Manage Service</h2>
            </div>
          
        </div>
    </section>
    );
};

export default ManageService;
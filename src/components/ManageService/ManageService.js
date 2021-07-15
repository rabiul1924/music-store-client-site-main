import React, { useContext } from 'react';
import { UserContext } from '../../App.js';
import Sideposter from '../Admin/Sideposter/Sideposter.js';

const ManageService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
        <div className="row">
            <div className="col-12 col-md-2 col-sm-6">
                <Sideposter></Sideposter>
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
              <h2 className="text-primary">Manage Service</h2>
            </div>
          
        </div>
    </section>
    );
};

export default ManageService;
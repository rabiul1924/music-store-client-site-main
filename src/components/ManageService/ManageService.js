import React, { useContext } from 'react';
import { UserContext } from '../../App.js';
import Sideposter from '../Admin/Sideposter/Sideposter.js';

const ManageService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
        <div className="row">
            <div className="col-12 col-sm-6 col-md-2">
                <Sideposter></Sideposter>
            </div>
            <div className="col-12 col-sm-12 col-md-10">
              <h2 className="text-primary">Manage Service</h2>
            </div>
          
        </div>
    </section>
    );
};

export default ManageService;
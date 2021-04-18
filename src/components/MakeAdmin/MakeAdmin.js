import React, { useContext } from 'react';
import { UserContext } from '../../App.js';
import Sideposter from '../Admin/Sideposter/Sideposter.js';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
        <div className="row">
            <div className="col-md-5 col-sm-6 col-12">
                <Sideposter></Sideposter>
            </div>
            <div className="col-md-7 col-sm-12 col-12 d-flex justify-content-center">
                <div className="row">
                <input type="text" placeholder="New Admin Add"/>
             <input type="submit" />
             </div>
            </div>
          
        </div>
    </section>
    );
};

export default MakeAdmin;
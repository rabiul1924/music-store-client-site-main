import { faArrowAltCircleRight, faHome, faMapPin, faPlusCircle, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App.js';


const Sideposter = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
            
            <li>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
            </li>
            <li>
                <Link to="/order" className="text-white">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} /> <span>Order List</span>
                </Link>
            </li>
            <li>
                <Link to="/addService" className="text-white">
                    <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Services</span>
                </Link>
            </li>
            <li>
                <Link to="/makeAdmin" className="text-white">
                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                </Link>
            </li>
            <li>
                <Link to="/manageServices" className="text-white">
                    <FontAwesomeIcon icon={faMapPin} /> <span>Manage Services</span>
                </Link>
            </li>
           
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sideposter;
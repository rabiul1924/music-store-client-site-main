import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faBook, faBookmark, faComment } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/book:/_id" className="text-white">
                        <FontAwesomeIcon icon={faBook} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/booklist" className="text-white">
                        <FontAwesomeIcon icon={faBookmark} /> <span>Book List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/comment" className="text-white">
                        <FontAwesomeIcon icon={faComment} /> <span>Comment</span>
                    </Link>
                </li>
               
            </ul>
            <div>
                <Link to="/" onClick={() => setLoggedInUser({})} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;
import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

   

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-12 col-sm-6 col-md-6">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
              
            </div>
        </section>
    );
};

export default Dashboard;
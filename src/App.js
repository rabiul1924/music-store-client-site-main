import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard.js';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute.js';
import Book from './components/Book/Book.js';
import Booklist from './components/Booklist/Booklist.js';
import Comment from './components/Comment/Comment.js';
import Admin from './components/Admin/Admin/Admin.js';
import Order from './components/Orderlist/Order.js';
import AddService from './components/AddService/AddService.js';
import MakeAdmin from './components/MakeAdmin/MakeAdmin.js';
import ManageService from './components/ManageService/ManageService.js';

export const UserContext = createContext({});

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/admin">
         <Admin></Admin>
          </PrivateRoute>
        <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/book/:_id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/booklist">
            <Booklist></Booklist>
          </PrivateRoute>
          <PrivateRoute path="/comment">
            <Comment></Comment>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageService></ManageService>
          </PrivateRoute>
        <Route path="/login">
            <Login></Login>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

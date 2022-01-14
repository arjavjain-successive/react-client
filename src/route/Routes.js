import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "../user/Login";
import Admin from "../user/role/Admin"
import User from "../user/role/User"
import Trainee from "../user/role/Trainee";
const Dashboard=()=>{
    return(
        <Router>
            <Routes>
                 <Route exact path="/Login" element={<Login/>}/>
                 <Route exact path="/Admin" element={<Admin/>}/>
                 <Route exact path="/User" element={<User/>}/>
                 <Route exact path="/Trainee" element={<Trainee/>}/>
                 
            </Routes>
        </Router>
    )
}
export default Dashboard;

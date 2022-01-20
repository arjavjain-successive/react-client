import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from "../error";
import Home from "../user/role/Home";
import Dashboard from "../dasboard/dashboard";

import Login from "../user/Login";

const Routers =()=>{
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="*" element={<Error/>}/>
            </Routes>
        </Router>
    )
}
export default Routers;

import React, { useState } from 'react';
import '../App.css'
import Admin from "../user/role/Admin";
import Trainee from "../user/role/Trainee";
import User from "../user/role/User";


const Dashboard = () =>{
    const [adminn,setAdminn] = useState(false);
    const [userss,setUserrs] = useState(false);
    const [trainee,setTrainee] = useState(false);
    return(
        <div>
         <h1>Welcome to Dashboard</h1>
            <button onClick = { () => {setAdminn(true); setUserrs(false);setTrainee(false)}} >Admin</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick = { () => {setAdminn(false); setUserrs(true);setTrainee(false)}} >User</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick = { () => {setAdminn(false); setUserrs(false);setTrainee(true)}} >Trainee</button>
            {adminn && <Admin/>}
            {userss && <User/>}
            {trainee && <Trainee/>}
        </div>      
    )
}
export default Dashboard;

import React from "react";
import { Link } from '@shopify/polaris';
import "../../App.css"
const Home = () => {
    return(
        <div className = "App-header">
            <Link url="/login" >Go to Login Page</Link>
        </div>
    );
}
export default Home;

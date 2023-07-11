import React from "react";
import {Link} from 'react-router-dom';


export default function landingPage(){
    return (
        <Link to="/home">
            <button>Let's go!</button>
        </Link>
        
    )
};
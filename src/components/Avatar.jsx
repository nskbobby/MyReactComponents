import React from "react";
import './Avatar.css'

function Avatar({img}){

    return (
<img src={img} 
            alt="image" 
            className="profile-image"></img>
    );
}

export default Avatar;
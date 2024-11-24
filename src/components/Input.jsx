import React from "react";

function Input({label,type}){
    return(
        <div>
        <label className="form-label">{label}</label>
        <input className="form-control" type={type}></input>
        </div>
    );
}

export default Input;
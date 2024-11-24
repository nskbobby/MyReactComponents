import React from "react";
import './Form.css';
import Input from "./Input";
import  Alert  from "@mui/material/Alert";

function Form({actionRoute, formText}){

    return(
<form action={actionRoute} method='POST' className="form form-login form-group d-flex flex-column border rounded border-dark p-4">
    <p className="lead">Log in</p>
    <Input label='username or email' type='text' />
    <Input label='password' type='password' />
    <p className="form-text">{formText}</p>
    <input type="button" className="form-control btn btn-primary" value="submit"></input>
</form>
    );
}


function CreateAccountForm({actionRoute,formText}){

    return(
<form action={actionRoute} method='POST' className="form form-group form-createaccount d-flex flex-column border rounded border-dark p-4 gap-1">
    <p className="lead">Create Account</p>
    <Input label='username or email' type='text' />
    <Input label='password' type='password' />
    <Input label='confirm password' type='password' />
    <Alert severity="warning" className="form-text">{formText}</Alert>
    <input type="button" className="form-control btn btn-primary" value="submit"></input>
</form>
    );
}




export default Form;
export {CreateAccountForm};
import React, { useState } from "react";
import './GreetingInput.css'

function GreetingInput(){
const [Greeting, setGreeting]=useState("");

function handleChange(event){
setGreeting(event.target.value);


}

return(
    <div className="greeting-main">
    <h4 className="display-4 greeting-heading greeting-text">
        {Greeting}
    </h4>
    <input className="form-control greeting-text" type="text" onChange={handleChange} placeholder="what is your name" value={Greeting} />
    </div>
);
}

export default GreetingInput
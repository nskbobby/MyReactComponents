import React, {useState} from "react";
import './Counter.css';
function Counter(){
var [count,setCount]=useState(0);

function decreaseCount(){
    setCount((count>0)?count-1:0);
}

function increaseCount(){
    setCount(count+1);
}
    return(
        <div className="d-flex align-items-center gap-1" style={{height:'50px'}}>
           <button className="btn btn-outline-secondary" onClick={decreaseCount}>-</button> 
           <h2 style={{fontSize:'40px'}}>{count}</h2>
            <button className="btn btn-outline-secondary" onClick={increaseCount}>+</button>
        </div>
    );
}

export default Counter
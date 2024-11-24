import React,{useEffect, useState} from "react";
import './Clock.css';

function Clock(){
   var [time,setTime]=useState('');

    

useEffect(()=>{

    const updateTime=()=>{
    const date=new Date();
     setTime(date.toLocaleTimeString());
    };

    updateTime();

    const Interval= setInterval(updateTime,1000);

    return()=> clearInterval(Interval);
},[]);



return(
    <div className="clock-main">
        <p className="display-4">{time}</p>
    </div>
    
        );
    }

export default Clock
import React, {useState} from "react";
import './style.css'

const Time=()=>{
    let newtime= new Data().toLocaleTimeString();
    //  const state=useState();
    const[count,setTime]=useState(newtime);

    const NewClick=()=>{
        let newCtime= new Date().toLocaleTimeString();
        setTime(newCtime);
    }
    setInterval(NewClick,1000);
    return(
    <h1 className="text=6x1 text-center mb=10 mt-10">{count}</h1>
    );
}

export default Time;
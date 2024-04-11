import React, { useState } from "react";
const Timer=()=>{
    
    const[seconds,setSeconds]=useState(0);
    const[minutes,setMinutes]=useState(0);
    const[hours,setHours]=useState(0);

    return(
        <div
        style={
            {
                width:"67vw",
                background:"orange",
                marginLeft:"40px",
                padding:"20px"
            }
        }>
            <div>
                <p>Hours</p>
                <p>Minutes</p>
                <p>Seconds</p>
            </div>
        </div>
    )
}
export default Timer
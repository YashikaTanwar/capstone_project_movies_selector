import React, { useState } from "react";
import style from '../Timer/Timer.module.css'
const Timer=()=>{
    
    const[seconds,setSeconds]=useState(0);
    const[minutes,setMinutes]=useState(0);
    const[hours,setHours]=useState(0);

    return(
        <div
        style={
            {
                height:"20vh",
                width:"67vw",
                background:"#1E2641",
                marginLeft:"40px",
                padding:"20px 220px 20px 220px",
            }
        }>
            <div className={style.time} style={{display:"flex"}}>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}>Hours</p>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}>Minutes</p>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}>Seconds</p>
            </div>
            <div className={style.time} style={{display:"flex"}}>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}><img src=""/></p>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}><img src=""/></p>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}><img src=""/></p>
            </div>
            <div className={style.time} style={{display:"flex"}}>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}>0</p>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}>0</p>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}>Seconds</p>
            </div>
            <div className={style.time} style={{display:"flex"}}>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}><img src=""/></p>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}><img src=""/></p>
                <p style={{color:"white",margin:"0px 60px 0px 60px",fontSize:"20px"}}><img src=""/></p>
            </div>
            <button 
                style={
                    {backgroundColor:"red",
                    color:"white",
                    width:"20vw",
                    height:"40px",
                    outline:"none",
                    borderRadius:"10px",
                    border:"none",
                fontSize:"17px"}
                    }>Stop</button>
        </div>
    )
}
export default Timer
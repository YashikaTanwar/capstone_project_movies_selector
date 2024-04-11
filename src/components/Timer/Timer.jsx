import React, { useState } from "react";
import style from '../Timer/Timer.module.css'
import uparrow from "../../assets/images/uparrow.png"
import downarrow from "../../assets/images/downarrow.png"
const Timer=()=>{
    
    const[seconds,setSeconds]=useState(0);
    const[minutes,setMinutes]=useState(0);
    const[hours,setHours]=useState(0);

    const increaseSecond=()=>{
        if(seconds===59){
            return;
        }
        setSeconds((prev) => prev+1)
    }

    const decreaseMinute=()=>{
        if(minutes === 59){
            return;
        } 
        setMinutes((prev) => prev+1)
    }

    const decreaseHours=()=>{
        if(hours === 24){
            return;
        }
        setHours((prev) => prev+1)
    }
    return(
        <div
        style={
            {
                height:"27vh",
                width:"67vw",
                background:"#1E2641",
                marginLeft:"40px",
                padding:"13px 220px 0px 220px",
            }
        }>
            <div className={style.time} style={{display:"flex"}}>
                <p 
                style={
                    {color:"white",
                    margin:"0px 60px 0px 60px",
                    fontSize:"20px"}
                    }>Hours</p>
                <p 
                style={
                    {color:"white",
                    margin:"0px 60px 0px 60px",
                    fontSize:"20px"}
                    }>Minutes</p>
                <p 
                style={
                    {color:"white",
                    margin:"0px 60px 0px 60px",
                    fontSize:"20px"}
                    }>Seconds</p>
            </div>
            <div className={style.time} style={{display:"flex"}}>
                <p 
                style={
                    {color:"white",
                    margin:"0px 80px 0px 80px",
                    fontSize:"20px"}
                    }><img style={{width:"20px",height:"20px"}} onClick={"increaseSecond"} src={uparrow}/></p>
                <p 
                style={
                    {color:"white",
                    margin:"0px 80px 0px 80px",
                    fontSize:"20px"}
                    }><img style={{width:"20px",height:"20px"}} onClick={"increaseMinute"} src={uparrow}/></p>
                <p 
                style={
                    {color:"white",
                    margin:"0px 80px 0px 80px",
                    fontSize:"20px"}
                    }><img style={{width:"20px",height:"20px"}} onClick={"increaseHours"} src={uparrow}/></p>
            </div>
            <div className={style.time} style={{display:"flex"}}>
                <p 
                style={
                    {color:"white",
                    margin:"0px 85px 0px 85px",
                    fontSize:"20px"}
                    }>0</p>
                <p 
                style={
                    {color:"white",
                    margin:"0px 85px 0px 85px",
                    fontSize:"20px"}
                    }>0</p>
                <p 
                style={
                    {color:"white",
                    margin:"0px 85px 0px 85px",
                    fontSize:"20px"}
                    }>0</p>
            </div>
            <div className={style.time} style={{display:"flex"}}>
                <p 
                style={
                    {color:"white",
                    margin:"0px 80px 0px 80px",
                    fontSize:"20px"}
                    }><img style={{width:"20px",height:"20px"}} onClick={"decreaseSecond"} src={downarrow}/></p>
                <p 
                style={
                    {color:"white",
                    margin:"0px 80px 0px 80px",
                    fontSize:"20px"}
                    }><img style={{width:"20px",height:"20px"}} onClick={"decreaseMinute"} src={downarrow}/></p>
                <p 
                style={
                    {color:"white",
                    margin:"0px 80px 0px 80px",
                    fontSize:"20px"}
                    }><img style={{width:"20px",height:"20px"}} onClick={"decreaseHours"} src={downarrow}/></p>
            </div>
            <button 
                style={
                    {backgroundColor:"red",
                    color:"white",
                    width:"28vw",
                    height:"40px",
                    outline:"none",
                    borderRadius:"10px",
                    border:"none",
                    fontSize:"17px",
                    marginTop:"5px",
                    marginLeft:"65px"}
                    }>Stop</button>
        </div>
    )
}
export default Timer
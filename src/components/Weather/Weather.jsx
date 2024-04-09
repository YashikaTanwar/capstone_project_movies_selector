import React,{useEffect,useState} from 'react';
import styles from '../Weather/Weather.module.css';
const Weather=()=>{
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
    const[weather,setWeather]=useState(false); 
    return(
        <div>
            <div>
                <div className={styles.container}>
                    
                </div>
            </div>
        </div>
    )
}
export default Weather
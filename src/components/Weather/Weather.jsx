import React,{useEffect,useState} from 'react';
import { getweatherDetails } from '../../apis/weather';
import styles from '../Weather/Weather.module.css';
const Weather=()=>{
    const[date,setDate]=useState("");
    const[weather,setWeather]=useState(true); 

    useEffect(()=>{
        fetchWeatherDetails();   
    })
    const fetchWeatherDetails=async()=>{
        const result=await getweatherDetails();
        setWeather(result.current);
        setDate(result.location.localTime);
    }
    return(
        <div>
            <div>
                <div className={styles.container}>
                    <div className={styles.info}>
                            <span id={styles.date}>Date</span>
                            <span id={styles.time}>Time</span>
                    </div>
                    <div className={styles.info}>
                            <span>{date}</span>
                            <span>{weather}</span>
                    </div>
                    <div className={styles.info}>
                            <span>Date</span>
                            <span>Time</span>
                    </div>    
                </div>
            </div>
        </div>
    )
}
export default Weather
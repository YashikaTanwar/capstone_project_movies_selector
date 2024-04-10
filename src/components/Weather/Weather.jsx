import React,{useEffect,useState} from 'react';
import { getweatherDetails } from '../../apis/weather';
import styles from '../Weather/Weather.module.css';
const Weather=()=>{
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
    const[weather,setWeather]=useState(false); 

    useEffect(()=>{
        const fetchWeatherDetails=async()=>{

        }
    })
    return(
        <div>
            <div>
                <div className={styles.container}>
                    <table className={styles.info}>
                        <tr>
                            <td>Date</td>
                            <td>Time</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>Time</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>Time</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Weather
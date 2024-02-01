import React, { useReducer } from 'react'
import Profile from '../../assets/images/home_headphones.png'
import styles from '../ProfileCard/ProfileCard.module.css'

// this function is used to parse through all the values of user so that it can be displayed on the screen  
// userData is a variable in which values are getting stored into. 
function ProfileCard() {
    let userDetails=localStorage.getItem("userData");
    if(userDetails)
    {
        userDetails=JSON.parse(userDetails);
    }
  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <img src={Profile} alt="" id={styles.headphone}/>
        </div>
        <div>
            <div className={styles.info} style={{width:"336px"}}>
                <p style={{color:"white",fontSize:"2rem",height:"40px"}}>{userDetails.Name}</p>
                <p style={{color:"white",fontSize:"2rem",height:"40px"}}>{userDetails.email}</p>
                <p style={{color:"white",fontSize:"3rem",height:"40px"}}>{userDetails.username}</p>
            </div>
        </div>
        
    </div>
  )
}

export default ProfileCard
import React, { useReducer } from 'react'
import Profile from '../../assets/images/home_headphones.png'
import styles from '../ProfileCard/ProfileCard.module.css'
function ProfileCard() {
    let userDetails=localStorage.getItem("userData");
    // let genres=localStorage.getItem("genre")
    if(userDetails)
    {
        console.log("before",userDetails);
        userDetails=JSON.parse(userDetails);
        console.log("after",userDetails);
    }
    // if(genres)
    // {
    //     console.log("before",genres);
    //     genres=JSON.parse(genres);
    //     console.log("after",genres); 
    // }
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
            {/* <div>
                <div>
                    <p>{genres}</p>
                    <p></p>
                </div>
                <div>

                </div>
            </div> */}
        </div>
        
    </div>
  )
}

export default ProfileCard
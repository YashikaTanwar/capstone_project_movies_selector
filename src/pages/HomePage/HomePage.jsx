import React from 'react'
import Home from '../../components/Home/Home'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import Notes from '../../components/Notes/Notes'
import News from '../../components/News/News'
import Weather from "../../components/Weather/Weather"
import Timer from "../../components/Timer/Timer"
import '../HomePage/HomePage.module.css'
import styles from '../HomePage/HomePage.module.css'
function HomePage() {
  return (
    <div className={styles.home} style={{ background: "black" }}>
      <div>
        
        <div style={{display:"flex"}}>
          <div>
            <ProfileCard /><Weather />
          </div>          
          <div className={styles.note} style={{ margin: "40px" }}><Notes /></div>
        </div>

        <div>
            <div><Timer /></div>
        </div>
      </div>
      <div>
        <div><News/></div>
      </div>
      

    </div>
  )
}

export default HomePage
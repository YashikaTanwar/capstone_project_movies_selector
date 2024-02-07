import React from 'react'
import Home from '../../components/Home/Home'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import Notes from '../../components/Notes/Notes'
import News from '../../components/News/News'
import '../HomePage/HomePage.module.css'
import styles from '../HomePage/HomePage.module.css'
function HomePage() {
  return (
    <div className={styles.home} style={{background:"black"}}>
      <div><ProfileCard/></div>
      <div className={styles.note} style={{margin:"40px"}}><Notes/></div>
      <div><News/></div>
    </div>
  )
}

export default HomePage
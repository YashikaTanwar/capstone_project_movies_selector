import React from 'react'
import styles from '../Notes/Notes.module.css'
function Notes() {
  return (
    <div className={styles.container}>
      <h2>All Notes</h2>
      <p style={{fontSize:"1.3rem",margin:"15px 25px"}}>This is how I'm going to learn MERN stack in next 3 months.</p>
    </div>
  )
}

export default Notes
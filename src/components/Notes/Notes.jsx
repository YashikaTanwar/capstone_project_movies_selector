import React, { useEffect, useState } from 'react'
import styles from '../Notes/Notes.module.css'
function Notes() {
  const [noteData,setnoteData]=useState("Hello");
  
  const handleSaveNotes=(event)=>{
    setnoteData(event.target.value);
    localStorage.setItem("notes",JSON.stringify(noteData));
  }

  // even after page refresh all the content will still be present as we are using localstorgae to get(print) values
  useEffect(()=>{
    const notes=localStorage.getItem("notes");
    if(notes)
    {
      // parse means that it will loop through the data and will display it on the screen 
      setnoteData(JSON.parse(notes));
    }
  },[]);

  useEffect(()=>{
    console.log(noteData);
  },[noteData]);

  return (
    <div className={styles.container}>
      <h2 style={{padding:"20px 30px"}}>All Notes</h2>
      <textarea 
      style={
        {fontSize:"1.3rem",
        margin:"15px 20px",
        outline:"none",
        padding:"0px 15px",
        height:"411px",
        width:"427px",
        background:"#F1C75B",
        color:"black",
        border:"none",
        resize:"none"}
        } value={noteData} onChange={handleSaveNotes}/>
    </div>
  )
}
export default Notes
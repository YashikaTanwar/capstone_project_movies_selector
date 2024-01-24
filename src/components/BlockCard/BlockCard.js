import React from 'react'

function BlockCard(props) {
  return (
    <div style={{
        background:props.genreDetails["color"],
        color:"white",
        padding:"16px",
        borderRadius:"12px"
    }}
        key={props.genreDetails.id}>
        <p>{props.genreDetails.id}</p>
        {props.genreDetails.image}
    </div>
  )
}
export default BlockCard
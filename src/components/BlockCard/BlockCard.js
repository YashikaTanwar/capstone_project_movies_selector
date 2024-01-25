import React from 'react'

function BlockCard(props) {
  const addValuesToCategories = (value) => {
    const existingValue = props.categoryList.filter(
      (category) => category === value
    )
      
    if (existingValue.length === 0) {
      props.setCategories([...props.categoryList, value]);
    }
    else {
      //remove it from the array
    }
  }
  return (
    <div onClick={() => addValuesToCategories(props.genreDetails.id)}
      style={{
        background: props.genreDetails["color"],
        color: "white",
        padding: "16px",
        borderRadius: "12px"
      }}
      key={props.Key}
    >
      <p>{props.genreDetails.id}</p>
      {props.genreDetails.image}
    </div>
  )
}
export default BlockCard

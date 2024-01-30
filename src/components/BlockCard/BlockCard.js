import { useEffect } from 'react';
import {React,useState} from 'react'

function BlockCard(props) {
  const [isSelected,setisSelected]=useState(false);

  const addValuesToCategories = (value) => {
    const existingValue = props.categoryList.filter(
      (category) => category === value
    )
    if (existingValue.length === 0) {
      props.setCategories([...props.categoryList, value]);
    }
    else {
      const newCategoryList=props.categoryList.filter((category)=>category !== value);
      props.setCategories(newCategoryList);
    }
  }
  
  // when we will click on cross button the green outline of genre cards will also get removed using this functionality
  useEffect(()=>{
      const isExists=
          props.categoryList.includes(props.genreDetails.id) === true;
      setisSelected(isExists);
  });

  return (
    <div 
    onClick={() => {
      addValuesToCategories(props.genreDetails.id);
      // this will negate isSelected value i.e. unselect the value
      setisSelected(!isSelected); 
    }}
      style={{
        background: props.genreDetails["color"],
        color: "white",
        padding: "16px",
        borderRadius: "12px",
        border:`${isSelected ? "4px solid green":"4px solid white"}`
      }}
      key={props.Key}
    >
      <p>{props.genreDetails.id}</p>
      {props.genreDetails.image}
    </div>
  )
}
export default BlockCard
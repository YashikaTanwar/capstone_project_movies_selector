import React, { useEffect, useState } from 'react'
// Navigate is used to move to next page easily

import { useNavigate } from 'react-router-dom' 
import styles from './MovieGenre.module.css'

import action from '../../assets/images/action.png'
import drama from '../../assets/images/drama.png'
import fantasy from '../../assets/images/fantasy.png'
import fiction from '../../assets/images/fiction.png'
import horror from '../../assets/images/horror.png'
import music from '../../assets/images/music.png'
import romance from '../../assets/images/romance.png'
import thriller from '../../assets/images/thriller.png'
import western from '../../assets/images/western.png'
import BlockCard from '../BlockCard/BlockCard'

const DEFAULT_GENRES = [
  {
    id: 'Action',
    style: { height: 90, width: 150 },
    color: '#FF5209',
    image: (
      <img src={action} alt="Action genre" />
    )
  },
  {
    id: 'Drama',
    color: '#D7A4FF',
    image: (
      <img src={drama} alt="Drama genre" />
    )
  },
  {
    id: 'Romance',
    color: '#148A08',
    image: (
      <img src={romance} alt="Romance genre" />
    )
  },
  {
    id: 'Thriller',
    color: '#84C2FF',
    image: (
      <img src={thriller} alt="Thriler genre" />
    )
  },
  {
    id: 'Western',
    color: '#902500',
    image: (
      <img src={western} alt="Western genre" />
    )
  },
  {
    id: 'Horror',
    color: '#7358FF',
    image: (<img src={horror} alt="Horror genre" />)
  },
  {
    id: 'Fantasy',
    color: '#FF4ADE',
    image: (
      <img src={fantasy} alt="Fantasy genre" />
    )
  },
  {
    id: "Music",
    color: "#E61E32",
    image: (<img src={music} alt="Music genre" />)
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: (
      <img src={fiction} alt="Fiction genre" />
    )
  }
]
function MovieGenre() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [lengthError, setlengthError] = useState(false);

  useEffect(() => {
    console.log("categories", categories);
  }, [categories]);

  // remove selected category
  const RemoveCategory=(value)=>{
    // this will deselect value 
    // categories consist of an array of all selected genre
    // the value which we want to deselect is named as 'value' 
    const newCategoryList=categories.filter((category)=>category !== value);
    console.log(newCategoryList);
    setCategories(newCategoryList);
};

    const handleSubmit=()=>{
      if(categories.length ==0)
      {
        setlengthError(true);
        return;
      }
      localStorage.setItem("genre",categories);
      navigate("/home");
    }
  return (
    <div className={styles.container}>
      <div className={styles.leftcontainer}>
        <h2 id={styles.logo}>Super App</h2>
        <h2 id={styles.entertainment}>Choose your entertainment category</h2>
        <div>
          {
            categories.map((category) => (
              <div style={{ color: "white" }} key={category}>{category}
              <button onClick={()=>RemoveCategory(category)}>CROSS</button>
              </div>  
            ))
          }
          {lengthError ?(<p className={styles.error}>Minimum 3 categories required</p>):(<></>) }
        </div>
      </div>

      <div className={styles.rightcontainer}>
        {DEFAULT_GENRES.map((genre, idx) => (
          <BlockCard
            genreDetails={genre}
            key={genre.id}
            idx={idx}
            setCategories={setCategories}
            categoryList={categories}
          />
        ))}
        <button className={styles.nextpage} onSubmit={handleSubmit}>Next Page</button>
      </div>
    </div>
  )
}

export default MovieGenre
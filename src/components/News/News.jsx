import React, { useEffect, useState } from 'react'
import styles from '../News/News.module.css'

// we are importing an api here
import { getNewsDetails } from '../../apis/news';
function News() {
    const [news,setnews]=useState([]);
    
    // to read data from api we are using useEffect here
    useEffect(()=>{
        fetchnews();
    },[]);

    const fetchnews = async()=>{
        const result=await getNewsDetails();
        setnews(result);
    }
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={news.urlToImage} alt="image" />
            </div>
            <div className={styles.info}>{news.title}</div>
            <div className={styles.desc}>
                <p>{news.description}</p>
            </div>
        </div>
        <button className={styles.browse}>Browse</button>
        </div>
    )
}

export default News
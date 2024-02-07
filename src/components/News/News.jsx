import React from 'react'
import styles from '../News/News.module.css'
function News() {
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.image}>
                <img src="" alt="image" />
            </div>
            <div className={styles.title}>Want to climb Mount Everest</div>
            <div className={styles.description}>
                <p>In the years since human
                beings first reached the summit of Mount Everest in 1953,
                climbing the world's highest mountain has changed dramatically.
                Today, hundreds of mountaineers manage the feat each year thanks
                to improvements in knowledge, technology, and the significant 
                infrastructure provided by commercially guided expeditions that
                provide a veritable highway up the mountain for those willing to 
                accept both the......</p>
            </div>
        </div>
        <button className={styles.browse}>Browse</button>
        </div>
    )
}

export default News
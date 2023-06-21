import React from "react"
import styles from "../Home/home.module.scss"
import diary from "../../images/diary.png" 
import laptop from "../../images/laptop.png" 
import puzzle from "../../images/puzzle.png" 
// import {Link} from "react-router-dom";

export default function Home() {
return (
    <div className={styles.home}>
        <div className={styles.home__background}>
        <div className={styles.home__container}>
        <h1 className={styles.home__title}>Learn it!</h1>
        <div className={styles.home__about}>The easiest way to make and study flashcards</div>
        {/* <Link to = "/wordlist" className="home__button">Start</Link> */}
        <button className={styles.home__button}>Start</button>
        </div>
        <div className={styles.home__row}>
            <div className={styles.home__column}>
            <img src={diary}></img>
            <p>Use Our Flashcards</p>
            </div>
            <div className={styles.home__column}>
            <img src={laptop}></img>
            <p>Make your own</p>
            </div>
            <div className={styles.home__column}>
            <img src={puzzle}></img>
            <p>Practice with games</p>
            </div>
        </div>
        </div>
        <div className={styles.area} >
            <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div >
    </div>
)
}
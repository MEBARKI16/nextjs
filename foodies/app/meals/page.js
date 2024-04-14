import React from 'react'
import classes from "./page.module.css"

const PageMeals = () => {
    console.log("meals")
    return (
        <>
            <header className={classes.header}>
                <h1>Des repas délicieux, créés <span className={classes.highlight}>par vous</span></h1>
                <p>Choisissez votre recette préférée et cuisinez-la vous-même. c'est facile et amusant</p>
            </header>
            <main className={classes.main}></main>
        </>
    )
}

export default PageMeals
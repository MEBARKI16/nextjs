import React from 'react'
import classes from "./page.module.css"
import Link from 'next/link'
import MealsGrid from '@/components/Meals/MealsGrid'

const PageMeals = () => {
    console.log("meals")
    return (
        <>
            <header className={classes.header}>
                <h1>Des repas délicieux, créés <span className={classes.highlight}>par vous</span></h1>
                <p>Choisissez votre recette préférée et cuisinez-la vous-même. c'est facile et amusant</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Partagez Votre Recette Préférée
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={[]} />
            </main>
        </>
    )
}

export default PageMeals
import React from 'react';
import classes from "./page.module.css";
import Link from 'next/link';
import MealsGrid from '@/components/Meals/MealsGrid';
import { GetMeals } from '@/lib/meals';

async function PageMeals() {
    const meals = await  GetMeals();
    return (
        <>
            <header className={classes.header}>
                <h1>Des repas délicieux, créés <span className={classes.highlight}>par vous</span></h1>
                <p>Choisissez votre recette préférée et cuisinez-la vous-même. C'est facile et amusant!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Partagez Votre Recette Préférée
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    );
}

export default PageMeals;

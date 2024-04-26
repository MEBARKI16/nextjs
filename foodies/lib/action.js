'use server';

import { redirect } from "next/navigation";
import { addMeal } from "./meals";
import slugify from 'slugify';

export async function shareMeal(formData) {
    const title = formData.get('title'); // Récupérer le titre du formData
    const slug = slugify(title, { lower: true, replacement: '-', strict: true }); // Créer un slug

    const meal = {
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        title: title,
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        slug: slug // Utiliser le slug généré
    };

    await addMeal(meal);
    redirect('/meals')
}

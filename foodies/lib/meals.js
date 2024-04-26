import sql from "better-sqlite3"
import slugify from "slugify"
import xss from "xss"
import fs from 'node:fs'
const db = sql("meals.db");

export async function GetMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    // throw new Error('Erreur lors de la récupération des données');
    return db.prepare("SELECT * FROM meals").all()
}

export function GetMeal(meal) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(meal)
}

export async function addMeal(meal) {
    meal.title = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.title}.${extension}`
    const stream = fs.createWriteStream(`C:/wamp64/www/NextJsCours/foodies/public/images/${fileName}`)
    const bufferImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferImage));
    meal.image = `/images/${fileName}`
    db.prepare(`INSERT INTO meals
     (title,summary,instructions,creator,creator_email,image,slug)
     VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
     )
     `
    ).run(meal)
}
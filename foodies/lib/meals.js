import sql from "better-sqlite3"
import slugify from "slugify"
import xss from "xss"
const db = sql("meals.db");

export async function GetMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    // throw new Error('Erreur lors de la récupération des données');
    return db.prepare("SELECT * FROM meals").all()
}

export function GetMeal(meal) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(meal)
}

export function addMeal(meal) {
    meal.title = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);
}
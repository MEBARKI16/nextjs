import sql from "better-sqlite3"

const db = sql("meals.db");

export async function GetMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    // throw new Error('Erreur lors de la récupération des données');
    return db.prepare("SELECT * FROM meals").all()
}
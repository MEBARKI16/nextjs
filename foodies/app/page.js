import styles from "./page.module.css"
import Link from "next/link"
export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}></div>
        <div>
          <div className={styles.hero}>
            <h1>nourriture de niveau supérieur pour les gourmets de niveau supérieur</h1>
            <p>déguster et partager des plats du monde entier.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Rejoindre la Communauté</Link>
            <Link href="/meals">Explorer les Repas</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>Fonctionnement de la plateforme</h2>
          <p>
            Mebarki Food est une plateforme conçue pour les passionnés de cuisine, offrant la possibilité de partager leurs recettes préférées et de découvrir des mets innovants. Elle facilite également les interactions et les échanges entre gourmets du monde entier.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Pourquoi choisir Mebarki Food ?</h2>
          <p>
            En choisissant Mebarki Food, vous accédez à une communauté dynamique de passionnés de cuisine, prêts à partager leurs découvertes culinaires et à enrichir votre répertoire gastronomique. C'est l'endroit parfait pour les épicuriens désireux de connecter avec des amateurs de cuisine du monde entier.
          </p>
        </section>
      </main>

    </>
  );
}

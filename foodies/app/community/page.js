import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Une passion partagée: <span className={classes.highlight}>Food</span>
                </h1>
                <p>Rejoignez notre communauté et partagez vos recettes préférées !</p>
            </header>
            <main className={classes.main}>
                <h2>Avantages communautaires</h2>

                <ul className={classes.perks}>
                    <li>
                        <Image src={mealIcon} alt="A delicious meal" />
                        <p>Partagez et découvrez des recettes</p>
                    </li>
                    <li>
                        <Image src={communityIcon} alt="A crowd of people, cooking" />
                        <p>Trouvez de nouveaux amis et des personnes partageant les mêmes idées</p>
                    </li>
                    <li>
                        <Image
                            src={eventsIcon}
                            alt="A crowd of people at a cooking event"
                        />
                        <p>Participez à des événements exclusifs</p>
                    </li>
                </ul>
            </main>
        </>
    );
}
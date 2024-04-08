import Link from 'next/link';
import Header from './components/Header';

export default function Home() {
  console.log("hello")
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href="/About">
        About Us
      </Link>
    </main >
  );
}

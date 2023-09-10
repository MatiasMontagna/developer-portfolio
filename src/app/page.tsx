import Nav from '@/components/Nav';
import LandingHero from '@/components/LandingHero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-24 px-32">
      <Nav />
      <LandingHero />
    </main>
  );
}

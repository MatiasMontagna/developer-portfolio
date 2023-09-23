import Nav from '@/components/Nav';
import LandingHero from '@/components/LandingHero';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-48 px-32">
      <Nav />
      <LandingHero />
      <TechStack />
    </main>
  );
}

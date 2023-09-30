import Nav from '@/components/Nav';
import LandingHero from '@/components/LandingHero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-48 px-32 pb-20">
      <Nav />
      <LandingHero />
      <TechStack />
      <Projects />
    </main>
  );
}

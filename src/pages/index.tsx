import { Sora } from 'next/font/google';
import { HomeSection } from '~/components/home-section';
import { NavigationSection } from '~/components/navigation-section';

const sora = Sora({ subsets: ['latin'] });
export default function Home() {
  return (
    <main className={`${sora.className}`}>
      <NavigationSection />
      <HomeSection />
    </main>
  );
}

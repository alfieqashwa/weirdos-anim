import { Sora } from 'next/font/google';
import { HomeMenu } from '~/components/home-menu';
import { NavigationSection } from '~/components/navigation-section';

const inter = Sora({ subsets: ['latin-ext'] });
export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <NavigationSection />
      <HomeMenu />
    </main>
  );
}

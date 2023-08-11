import { Sora } from 'next/font/google';
import { HomeMenu } from '~/components/home-menu';

const inter = Sora({ subsets: ['latin-ext'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-24 py-2 ${inter.className}`}
    >
      <HomeMenu />
    </main>
  );
}

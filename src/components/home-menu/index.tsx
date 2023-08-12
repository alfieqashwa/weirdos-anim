import { Akaya_Telivigala } from 'next/font/google';
import { MenuList } from './menu-list';
import { RoundedTagline } from './rounded-tagline';
import { Tagline } from './tagline';
import { WeirdosVideo } from './weirdos-video';

const akaya = Akaya_Telivigala({
  weight: '400',
  subsets: ['latin-ext'],
});

export const HomeMenu = (): JSX.Element => {
  return (
    <div id='__home' className='relative min-h-screen pt-2'>
      <section className='flex justify-between items-center p-28'>
        <Tagline />
        <WeirdosVideo />
        <RoundedTagline />
      </section>
    </div>
  );
};

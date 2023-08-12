import { RoundedTagline } from './rounded-tagline';
import { Tagline } from './tagline';
import { WeirdosVideo } from './weirdos-video';

// margin: 0px auto;
export const HomeSection = (): JSX.Element => {
  return (
    <section
      id='#home'
      className='relative w-full bg-white min-h-[(100%-5rem)]'
    >
      <div className='m-auto flex justify-center items-center w-3/4 min-h-[80vh] '>
        <Tagline />
        <WeirdosVideo />
        <RoundedTagline />
      </div>
    </section>
  );
};

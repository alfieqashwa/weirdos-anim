import { RoundedTagline } from './rounded-tagline';
import { Tagline } from './tagline';
import { WeirdosVideo } from './weirdos-video';

// margin: 0px auto;
export const HomeSection = (): JSX.Element => {
  return (
    <section
      id='#home'
      // className='w-full relative bg-white min-h-[(calc(100%_-_5rem))]'
      className='w-full relative bg-white min-h-[calc(100vh_-_5rem)]'
    >
      <div className='bottom-8 m-auto flex justify-center items-center w-3/4 min-h-[80vh] '>
        <Tagline />
        <WeirdosVideo />
        <RoundedTagline />
      </div>
    </section>
  );
};

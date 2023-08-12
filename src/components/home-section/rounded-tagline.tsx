import { gsap } from 'gsap';
import { ArrowDown, MoveDown } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export const RoundedTagline = (): JSX.Element => {
  const taglineRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (taglineRef.current) {
      let ctx = gsap.context(() => {
        gsap.to(taglineRef.current, {
          rotation: -360,
          duration: 6,
          repeat: -1,
          ease: 'linear',
        });
      });

      //unmount
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className='absolute lg:w-24 lg:h-24 w-16 h-16 lg:bottom-8 bottom-full right-8 lg:right-[90%] outline outline-1 outline-black rounded-full flex justify-center items-center'>
      <span className='bg-black lg:w-12 lg:h-12 w-8 h-8 rounded-full relative text-white'>
        <MoveDown className='w-3 lg:w-5 text-white top-1/2 absolute -translate-y-1/2 left-1/2 -translate-x-1/2' />
      </span>

      <Image
        ref={taglineRef}
        src='/img/rounded-tagline.png'
        alt='Tagline'
        fill
      />
    </div>
  );
};

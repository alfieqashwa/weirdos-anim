import { gsap } from 'gsap';
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
    <div className='absolute w-24 h-24 bottom-10 -left-4 outline outline-1 outline-black rounded-full flex justify-center items-center'>
      <div className='bg-black w-12 h-12 rounded-full relative text-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-move-down absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
        >
          <path d='M8 18L12 22L16 18' />
          <path d='M12 2V22' />
        </svg>
      </div>
      <Image
        ref={taglineRef}
        src='/img/rounded-tagline.png'
        alt='Tagline'
        fill
      />
    </div>
  );
};

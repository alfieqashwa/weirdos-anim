import { gsap } from 'gsap';
import { Akaya_Telivigala } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export const Tagline = (): JSX.Element => (
  <div className='w-1/2 h-full flex flex-col justify-center items-start'>
    <h2 className='text-[3em] font-semibold capitalize text-[#202020] leading-tight w-4/5 items-start'>
      Discover a new era of cool
      {/* // TODOS: Animate Dynamic text */}
      <TypingAnimation />
    </h2>
    <h3 className='text-[1.25em] capitalize mb-4 text-[#797979] items-start'>
      Bored Of Apes? Try Something New.
    </h3>
    <div className='w-4/5 items-start'>
      <button className='relative bg-[#202020] text-white outline-none border-none text-sm py-[0.9rem] px-[2.3rem] rounded-full cursor-pointer hover:transition-all duration-200 ease-in-out'>
        <Link
          href='#about'
          aria-label='Explore'
          target='_blank'
          rel='noreferrer'
        >
          Explore
        </Link>
      </button>
    </div>
  </div>
);

const akaya = Akaya_Telivigala({
  weight: '400',
  subsets: ['latin-ext'],
});

const TEXTS = ['collectible items.', 'app killers.', 'nfts.'];

const TypingAnimation = (): JSX.Element => {
  // const textRef = useRef<HTMLSpanElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (cursorRef.current) {
      let ctx = gsap.context(() => {
        gsap.to(cursorRef.current, {
          opacity: 0,
          ease: 'power2.inOut',
          repeat: -1,
        });
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className={`${akaya.className}`}>
      {/* // TODOS: typing animation */}
      <span>
        <span className='uppercase font-bold'>{TEXTS[0]}</span>
      </span>
      <span ref={cursorRef}>|</span>
    </div>
  );
};

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export const Tagline = (): JSX.Element => (
  <div className='w-1/3'>
    <h1 className='font-semibold text-5xl'>Discover A New Era Of Cool</h1>

    {/* // TODOS: Animate Dynamic text */}
    <TypingAnimation />
    <p className='mt-.5 font-semibold text-xl text-[#797979]'>
      Bored Of Apes? Try Something New.
    </p>
    <button className='mt-3 bg-[#202020] text-slate-50 text-sm font-medium px-8 py-3 rounded-full'>
      Explore
    </button>
  </div>
);

const TEXTS = ['collectible items.', 'app killers.', 'nfts.'];

const TypingAnimation = (): JSX.Element => {
  const textRef = useRef<HTMLSpanElement | null>(null);
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
    <h1 className='mt-1.5 text-4xl uppercase font-bold text-[#FFA500]'>
      {/* // TODOS: typing animation */}
      <span ref={textRef}></span>
      <span
        ref={cursorRef}
        className='border-r-[6px] -1 border-slate-800'
      ></span>
    </h1>
  );
};

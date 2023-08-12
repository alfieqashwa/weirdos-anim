import { Akaya_Telivigala } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { MenuList } from './home-section/menu-list';

const akaya = Akaya_Telivigala({
  weight: '400',
  subsets: ['latin-ext'],
});

export const NavigationSection = () => {
  return (
    <section className='w-full' id='#navigation'>
      <nav className='flex w-[85%] justify-between items-center h-20 mx-auto'>
        <h1 className={`text-[4em] ${akaya.className}`}>
          <Link href='/'>W.</Link>
        </h1>
        <span className='w-6 h-0.5 absolute top-8 left-1/2 -translate-x-1/2 cursor-pointer hidden'>
          &nbsp;
        </span>
        <MenuList />
        <div className='invisible lg:visible'>
          <button className='bg-[#202020] rounded-[50px] relative text-white outline-none border-none text-sm py-[0.9rem] px-[2.3rem] cursor-pointer transition-all duration-200 ease-in-out'>
            <a
              href='https://google.com'
              aria-label='Connect Wallet'
              target='_blank'
              rel='noreferrer'
              className='whitespace-nowrap'
            >
              Connect Wallet
            </a>
          </button>
        </div>
      </nav>
    </section>
  );
};

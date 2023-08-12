import { Menu } from 'lucide-react';

const MENULIST = [
  { title: 'Home', link: '#home' },
  { title: 'About', link: '#about' },
  { title: 'Roadmap', link: '#roadmap' },
  { title: 'Showcase', link: '#showcase' },
  { title: 'Team', link: '#team' },
  { title: 'Faq', link: '#faq' },
] as const;

export const MenuList = (): JSX.Element => (
  <>
    <ul className='flex justify-center items-center list-none'>
      {MENULIST.map((m, i) => (
        <li key={i}>
          <a href={m.link} className='mx-4 cursor-pointer text-[#202020]'>
            {m.title}
          </a>
        </li>
      ))}
    </ul>
    <Menu className='block lg:hidden' size={28} />
  </>
);

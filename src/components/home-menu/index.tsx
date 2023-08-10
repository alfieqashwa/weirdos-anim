const MENULIST = [
  { title: 'home' },
  { title: 'about' },
  { title: 'roadmap' },
  { title: 'showcase' },
  { title: 'team' },
  { title: 'faq' },
] as const;

export const HomeMenu = () => {
  return (
    <div id='__home' className='w-full min-h-screen'>
      <header className='flex px-8 justify-between items-center'>
        {/* Logo */}
        <span className='text-6xl font-extrabold'>W.</span>
        {/* Menu */}
        <nav className='flex space-x-8'>
          {MENULIST.map((m, i) => (
            <p className='capitalize tracking-wide' key={i}>
              {m.title}
            </p>
          ))}
        </nav>
        <button className='capitalize bg-[#202020] text-sm font-medium tracking-wide text-white rounded-full px-10 py-3'>
          connect wallet
        </button>
      </header>
      <section className='flex justify-between items-center p-28'>
        <Tagline />
        <TheWeirdos />
      </section>
    </div>
  );
};

const Tagline = () => (
  <div className='kurt'>
    <h1>Discover A New Era Of Cool</h1>
    <h1>Collectible Items.</h1>
    <p>Bored Of Apes? Try Something New.</p>
  </div>
);
const TheWeirdos = () => (
  <div>
    <video
      width='640'
      height='480'
      src='/vid-cartoons.mp4'
      autoPlay
      loop
      muted
    />
  </div>
);
//

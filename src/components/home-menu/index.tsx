import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const MENULIST = [
  { title: "home", link: "#__home" },
  { title: "about", link: "#__about" },
  { title: "roadmap", link: "#__roadmap" },
  { title: "showcase", link: "#__showcase" },
  { title: "team", link: "#__team" },
  { title: "faq", link: "#__faq" },
] as const;

export const HomeMenu = () => {
  return (
    <div id="__home" className="relative w-full min-h-screen">
      <header className="flex px-8 justify-between items-center">
        {/* Logo */}
        <span className="text-6xl font-extrabold">W.</span>
        {/* Menu */}
        <nav className="flex space-x-8">
          {MENULIST.map((m, i) => (
            <a href={m.link} className="capitalize tracking-wide" key={i}>
              {m.title}
            </a>
          ))}
        </nav>
        <button className="capitalize bg-[#202020] text-sm font-medium tracking-wide text-white rounded-full px-10 py-3">
          connect wallet
        </button>
      </header>
      <section className="flex justify-between items-center p-28">
        <Tagline />
        <TheWeirdos />
        <RoundedTagline />
      </section>
    </div>
  );
};

const Tagline = () => (
  <div className="w-1/3">
    <h1 className="font-semibold text-5xl">Discover A New Era Of Cool</h1>

    {/* // TODOS: Animate Dynamic text */}
    <h1 className="mt-1.5 text-4xl uppercase font-bold text-[#FFA500]">
      Collectible Items.
    </h1>
    <p className="mt-.5 font-semibold text-xl text-[#797979]">
      Bored Of Apes? Try Something New.
    </p>
    <button className="mt-3 bg-[#202020] text-slate-50 text-sm font-medium px-8 py-3 rounded-full">
      Explore
    </button>
  </div>
);
const TheWeirdos = () => (
  <div>
    <video
      width="640"
      height="240"
      src="/vid-cartoons.mp4"
      autoPlay
      loop
      muted
    />
  </div>
);

const RoundedTagline = () => {
  const taglineRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (taglineRef.current) {
      let ctx = gsap.context(() => {
        gsap.to(taglineRef.current, {
          rotation: -360,
          duration: 6,
          repeat: -1,
          ease: "linear",
        });
      });

      //unmount
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="absolute w-24 h-24 bottom-10 -left-4 outline outline-1 outline-black rounded-full flex justify-center items-center">
      <div className="bg-black w-12 h-12 rounded-full relative text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-move-down absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          <path d="M8 18L12 22L16 18" />
          <path d="M12 2V22" />
        </svg>
      </div>
      <Image
        ref={taglineRef}
        src="/img/rounded-tagline.png"
        alt="Tagline"
        fill
      />
    </div>
  );
};

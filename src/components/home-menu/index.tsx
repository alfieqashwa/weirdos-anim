import { RoundedTagline } from "./rounded-tagline";
import { Tagline } from "./tagline";
import { WeirdosVideo } from "./weirdos-video";

const MENULIST = [
  { title: "home", link: "#__home" },
  { title: "about", link: "#__about" },
  { title: "roadmap", link: "#__roadmap" },
  { title: "showcase", link: "#__showcase" },
  { title: "team", link: "#__team" },
  { title: "faq", link: "#__faq" },
] as const;

export const HomeMenu = (): JSX.Element => {
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
        <WeirdosVideo />
        <RoundedTagline />
      </section>
    </div>
  );
};

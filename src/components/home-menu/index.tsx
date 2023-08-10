import { MenuList } from "./menu-list";
import { RoundedTagline } from "./rounded-tagline";
import { Tagline } from "./tagline";
import { WeirdosVideo } from "./weirdos-video";

export const HomeMenu = (): JSX.Element => {
  return (
    <div id="__home" className="relative w-full min-h-screen">
      <header className="flex px-8 justify-between items-center">
        {/* Logo */}
        <span className="text-6xl font-extrabold">W.</span>
        {/* Menu */}
        <MenuList />
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

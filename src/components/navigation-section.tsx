import { Akaya_Telivigala } from "next/font/google"
import Link from "next/link"
import {
  CollectWalletButton,
  MenuListDesktopView,
} from "./home-section/menu-list"

const akaya = Akaya_Telivigala({
  weight: "400",
  subsets: ["latin-ext"],
})

export const NavigationSection = () => {
  return (
    <section className="w-full" id="#navigation">
      <nav className="mx-auto flex h-20 w-[85%] items-center justify-between">
        <h1 className={`text-[4em] ${akaya.className}`}>
          <Link href="/">W.</Link>
        </h1>
        <span className="absolute left-1/2 top-8 hidden h-0.5 w-6 -translate-x-1/2 cursor-pointer">
          &nbsp;
        </span>
        <MenuListDesktopView />
        <div className="hidden lg:block">
          <CollectWalletButton />
        </div>
      </nav>
    </section>
  )
}

import { Akaya_Telivigala } from "next/font/google"
import Link from "next/link"
import {
  CollectWalletButton,
  MenuListDesktopView,
} from "./home-section/menu-list"
import { Menu } from "lucide-react"

const akaya = Akaya_Telivigala({
  weight: "400",
  subsets: ["latin-ext"],
})

type NavigationProps = {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavigationSection = ({ toggle, setToggle }: NavigationProps) => {
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
        <button
          onClick={() => setToggle(!toggle)}
          className="mb-4 mr-14 flex w-full justify-center lg:hidden"
        >
          <Menu size={30} />
        </button>
        <div className="hidden lg:block">
          <CollectWalletButton />
        </div>
      </nav>
    </section>
  )
}

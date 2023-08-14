import { Akaya_Telivigala } from "next/font/google"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import {
  CollectWalletButton,
  MenuListDesktopView,
} from "./home-section/menu-list"
import { Menu, MoveRight } from "lucide-react"

const akaya = Akaya_Telivigala({
  weight: "400",
  subsets: ["latin-ext"],
})

type NavigationProps = {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const MotionMenu = motion(Menu)
const MotionArrow = motion(MoveRight)

export const NavigationSection = ({ toggle, setToggle }: NavigationProps) => {
  const handleToggle = async () => {
    setToggle((t) => (t = !t))
  }

  const variantsMenu: Variants = {
    initial: { opacity: 0 },
    animate: {
      rotate: toggle ? 45 : 0,
      opacity: toggle ? 0 : 1,
      transition: { duration: 0.2 },
    },
  }

  const variantsArrow: Variants = {
    initial: { opacity: 0 },
    animate: {
      rotate: toggle ? 90 : 45,
      opacity: toggle ? 1 : 0,
      transition: { duration: 0.2 },
    },
  }

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
          onClick={handleToggle}
          className="relative mb-4 mr-14 flex w-full cursor-pointer justify-center lg:hidden"
        >
          <MotionArrow
            variants={variantsArrow}
            initial="initial"
            animate="animate"
            size={30}
            className="absolute"
          />
          &nbsp;
          <MotionMenu
            initial="initial"
            variants={variantsMenu}
            animate="animate"
            size={30}
            className="absolute"
          />
        </button>

        <div className="hidden lg:block">
          <CollectWalletButton />
        </div>
      </nav>
    </section>
  )
}

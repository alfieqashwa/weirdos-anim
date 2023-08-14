import { Akaya_Telivigala } from "next/font/google"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  CollectWalletButton,
  MenuListDesktopView,
} from "./home-section/menu-list"

const akaya = Akaya_Telivigala({
  weight: "400",
  subsets: ["latin-ext"],
})

type NavigationProps = {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavigationSection = ({ toggle, setToggle }: NavigationProps) => {
  const handleToggle = async () => {
    setToggle((t) => (t = !t))
  }

  const variants = {
    menu: {
      rotate: toggle ? 45 : 0,
      opacity: toggle ? 0 : 1,
      transition: { duration: 0.2 },
    },
    arrow: {
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
          <motion.svg
            animate={variants.arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-menu absolute`}
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </motion.svg>
          &nbsp;
          <motion.svg
            animate={variants.menu}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-menu absolute`}
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </motion.svg>
        </button>

        <div className="hidden lg:block">
          <CollectWalletButton />
        </div>
      </nav>
    </section>
  )
}

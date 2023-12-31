import { AnimatePresence, motion } from "framer-motion"
import { MENULIST } from "~/constant/menu-list-data"

export const MenuListMobileView = ({ toggle }: { toggle: boolean }) => {
  return (
    <AnimatePresence>
      <motion.ul
        initial={{ y: "100vh", opacity: 0, position: "relative" }}
        animate={{
          y: toggle ? 0 : "100vh",
          opacity: toggle ? 1 : 0,
          position: toggle ? "fixed" : "relative",
        }}
        exit={{ y: "100vh", opacity: 0, position: "relative" }}
        transition={{ type: "tween" }}
        className="top-20 z-50 flex min-h-[calc(100vh_-_5rem)] w-full touch-none flex-col items-center justify-center bg-white/80 backdrop-blur-sm transition-all duration-300 ease-in-out lg:hidden"
      >
        {MENULIST.map((m, i) => (
          <li key={i} className="my-4 text-center">
            <a href={m.link} className="cursor-pointer text-[#202020]">
              {m.title}
            </a>
          </li>
        ))}
        <li className="mt-2">
          <CollectWalletButton />
        </li>
      </motion.ul>
    </AnimatePresence>
  )
}

export const CollectWalletButton = () => (
  <button className="relative cursor-pointer rounded-[50px] border-none bg-[#202020] px-[2.3rem] py-[0.9rem] text-sm text-white outline-none transition-all duration-200 ease-in-out">
    <a
      href="https://google.com"
      aria-label="Connect Wallet"
      target="_blank"
      rel="noreferrer"
      className="whitespace-nowrap"
    >
      Connect Wallet
    </a>
  </button>
)

import { Menu } from "lucide-react"
import { MENULIST } from "~/constant/menu-list-data"
import { useToggleContext } from "~/hooks/context"

export const MenuListDesktopView = (): JSX.Element => {
  const { toggle, setToggle } = useToggleContext()
  return (
    <>
      <ul className="hidden items-center justify-center lg:flex">
        {MENULIST.map((m, i) => (
          <li key={i}>
            <a href={m.link} className="mx-4 cursor-pointer text-[#202020]">
              {m.title}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setToggle(!toggle)}
        className="mb-4 mr-14 flex w-full justify-center lg:hidden"
      >
        <Menu size={30} />
      </button>
    </>
  )
}

export const MenuListMobileView = () => {
  return (
    <ul className="fixed top-20 z-50 flex min-h-[calc(100vh_-_5rem)] w-full touch-none flex-col items-center justify-center bg-white/80 backdrop-blur-sm transition-all duration-300 ease-in-out lg:hidden">
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
    </ul>
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

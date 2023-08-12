import { Menu } from "lucide-react"
import { MENULIST } from "~/constant/menu-list-data"

export const MenuListDesktopView = (): JSX.Element => (
  <>
    <ul className="hidden list-none items-center justify-center lg:flex">
      {MENULIST.map((m, i) => (
        <li key={i}>
          <a href={m.link} className="mx-4 cursor-pointer text-[#202020]">
            {m.title}
          </a>
        </li>
      ))}
    </ul>
    <button className="inline-block lg:hidden">
      <Menu size={28} />
    </button>
  </>
)

export const MenuListMobileView = () => {
  return (
    <ul className="fixed inset-y-20 z-50 flex min-h-[calc(100vh_+_5rem)] w-full touch-none flex-col justify-center bg-white opacity-80 backdrop-blur-sm transition-all duration-300 ease-in-out lg:hidden">
      {MENULIST.map((m, i) => (
        <li key={i}>
          <a href={m.link} className="my-4 cursor-pointer text-[#202020]">
            {m.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

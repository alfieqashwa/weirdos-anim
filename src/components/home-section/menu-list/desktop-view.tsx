import { LazyMotion, motion, m, domAnimation } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { MENULIST } from "~/constant/menu-list-data"

export const MenuListDesktopView = (): JSX.Element => {
  const [routerPath, setRouterPath] = useState("")
  const router = useRouter()

  useEffect(() => {
    const path = router?.asPath.replace(/[/]/g, "")

    path && setRouterPath(path)
  }, [router?.asPath])

  const MotionLink = motion(Link)
  return (
    <LazyMotion features={domAnimation}>
      <ul className="hidden items-center justify-center lg:flex">
        {MENULIST.map((m, i) => {
          const isEqual = routerPath === m.link
          return (
            <li key={i}>
              <MotionLink legacyBehavior href={m.link} layout>
                <div className="group relative mx-4 cursor-pointer">
                  <span>{m.title}</span>
                  <div className="absolute -bottom-0.5 left-0 w-0 origin-left transform border-t-[3.5px] border-[#FFA500] transition-all duration-500 ease-in-out group-hover:w-full"></div>
                  {isEqual && <UnderlineAnimation />}
                </div>
              </MotionLink>
            </li>
          )
        })}
      </ul>
    </LazyMotion>
  )
}

const UnderlineAnimation = () => (
  <m.span
    layoutId="underline"
    transition={spring}
    className="absolute -bottom-0.5 block w-full border-t-[3.5px] border-black"
  />
)

const spring = {
  delay: 0.1,
  type: "spring",
  stiffness: 400,
  damping: 40,
}

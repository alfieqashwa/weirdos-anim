import { Sora } from "next/font/google"
import { useState } from "react"
import { HomeSection } from "~/components/home-section"
import { MenuListMobileView } from "~/components/home-section/menu-list"
import { NavigationSection } from "~/components/navigation-section"
import { ToggleContext } from "~/hooks/context"

const sora = Sora({ subsets: ["latin"] })
export default function Home() {
  const [toggle, setToggle] = useState(false)

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <main className={`${sora.className}`}>
        <NavigationSection />
        <HomeSection />
        {toggle && <MenuListMobileView />}
      </main>
    </ToggleContext.Provider>
  )
}

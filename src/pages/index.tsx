import { useState } from "react"
import { Sora } from "next/font/google"
import { HomeSection } from "~/components/home-section"
import { MenuListMobileView } from "~/components/home-section/menu-list"
import { NavigationSection } from "~/components/navigation-section"

const sora = Sora({ subsets: ["latin"] })
export default function Home() {
  const [toggle, setToggle] = useState(false)

  return (
    <main className={`${sora.className}`}>
      <NavigationSection toggle={toggle} setToggle={setToggle} />
      <HomeSection />
      {toggle && <MenuListMobileView toggle={toggle} />}
    </main>
  )
}

import { Sora } from "next/font/google"
import { HomeSection } from "~/components/home-section"
import { MenuListMobileView } from "~/components/home-section/menu-list"
import { NavigationSection } from "~/components/navigation-section"

const sora = Sora({ subsets: ["latin"] })
export default function Home() {
  return (
    <main className={`${sora.className}`}>
      <NavigationSection />
      <HomeSection />
      <MenuListMobileView />
    </main>
  )
}

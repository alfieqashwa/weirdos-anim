import { Akaya_Telivigala } from "next/font/google"
import Link from "next/link"
import React from "react"
import {
  MenuListDesktopView,
  MenuListMobileView,
} from "./home-section/menu-list"

const akaya = Akaya_Telivigala({
  weight: "400",
  subsets: ["latin-ext"],
})

export const NavigationSection = () => {
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
        <div className="invisible lg:visible">
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
        </div>
        <MenuListMobileView />
      </nav>
    </section>
  )
}

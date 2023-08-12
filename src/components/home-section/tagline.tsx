import { gsap } from "gsap"
import { Akaya_Telivigala } from "next/font/google"
import Link from "next/link"
import { useEffect, useRef } from "react"

export const Tagline = (): JSX.Element => (
  <div className="flex h-full w-1/2 flex-col items-start justify-center">
    <h2 className="w-4/5 items-start text-[3em] font-semibold capitalize leading-tight text-[#202020]">
      Discover a new era of cool
      {/* // TODOS: Animate Dynamic text */}
      <TypingAnimation />
    </h2>
    <h3 className="mb-4 items-start text-[1.25em] capitalize text-[#797979]">
      Bored Of Apes? Try Something New.
    </h3>
    <div className="w-4/5 items-start">
      <button className="relative cursor-pointer rounded-full border-none bg-[#202020] px-[2.3rem] py-[0.9rem] text-sm text-white outline-none duration-200 ease-in-out hover:transition-all">
        <Link
          href="#about"
          aria-label="Explore"
          target="_blank"
          rel="noreferrer"
        >
          Explore
        </Link>
      </button>
    </div>
  </div>
)

const akaya = Akaya_Telivigala({
  weight: "400",
  subsets: ["latin-ext"],
})

const TEXTS = ["collectible items.", "app killers.", "nfts."]

const TypingAnimation = (): JSX.Element => {
  // const textRef = useRef<HTMLSpanElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (cursorRef.current) {
      let ctx = gsap.context(() => {
        gsap.to(cursorRef.current, {
          opacity: 0,
          ease: "power2.inOut",
          repeat: -1,
        })
      })
      return () => ctx.revert()
    }
  }, [])

  return (
    <div className={`${akaya.className}`}>
      {/* // TODOS: typing animation */}
      <span>
        <span className="font-bold uppercase">{TEXTS[0]}</span>
      </span>
      <span ref={cursorRef}>|</span>
    </div>
  )
}
import { gsap } from "gsap"
import { ArrowDown, MoveDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export const RoundedTagline = (): JSX.Element => {
  const taglineRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (taglineRef.current) {
      let ctx = gsap.context(() => {
        gsap.to(taglineRef.current, {
          rotation: -360,
          duration: 6,
          repeat: -1,
          ease: "linear",
        })
      })

      //unmount
      return () => ctx.revert()
    }
  }, [])

  return (
    <div className="absolute bottom-full right-8 flex h-16 w-16 items-center justify-center rounded-full outline outline-1 outline-black lg:bottom-8 lg:right-[90%] lg:h-24 lg:w-24">
      <span className="relative h-8 w-8 rounded-full bg-black text-white lg:h-12 lg:w-12">
        <Link href="/sandbox">
          <MoveDown className="absolute left-1/2 top-1/2 z-20 w-3 -translate-x-1/2 -translate-y-1/2 text-white lg:w-5" />
        </Link>
      </span>

      <Image
        ref={taglineRef}
        src="/img/rounded-tagline.png"
        alt="Tagline"
        fill
      />
    </div>
  )
}

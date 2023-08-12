import { gsap } from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react"

import { Inter } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export default function Sample() {
  const app = useRef<HTMLDivElement>(null)
  const circle = useRef<HTMLDivElement>(null)
  const another_circle = useRef<HTMLDivElement>(null)

  //? https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
  useEffect(() => {
    if (app.current && circle.current) {
      let ctx = gsap.context(() => {
        // use scoped selectors
        gsap.to(".box", {
          rotation: 360,
          backgroundColor: "#8d3dae",
          duration: 2,
        })
        // or refs
        gsap.to(circle.current, {
          rotation: 360, // Rotate 360 degrees
          // duration: 1,
          duration: 1, // Animation duration in seconds
          repeat: -1, // Infinite repeat (-1 means infinite)
          ease: "linear", // Linear easing for a smooth rotation
        })
        gsap.fromTo(".class", { x: 0 }, { x: 100 })

        gsap.fromTo(
          another_circle.current,
          {
            rotation: 0,
            // backgroundColor: '#1fa838',
            // duration: 1,
            // opacity: 0,
          },
          {
            rotation: 360,
            backgroundColor: "#1fa838",
            // duration: 2,
            // opacity: 1,
            repeat: -1,
            // ease: 'bounce.out',
            // ease: 'power1.out',
            ease: "linear.easeNone",
          },
        )
      }, app.current)

      return () => ctx.revert()
    }
  }, [])

  return (
    <section>
      <div
        ref={app}
        className="flex h-full min-h-screen justify-around p-48 text-center"
      >
        <div className="box flex h-[100px] w-[100px] items-center justify-center rounded-xl bg-green-500 text-center font-semibold text-slate-50">
          selector
        </div>
        <div
          className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-purple-500 text-center font-semibold text-slate-50"
          ref={circle}
        >
          Ref
        </div>
        <div
          className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-sky-500 text-center font-semibold text-slate-50"
          ref={another_circle}
        >
          Ref-2
        </div>
      </div>
      <Image
        src="/img/cartoon-03.svg"
        alt="Weirdo Cartoon"
        width={300}
        height={300}
      />
      <div>
        <video
          width="320"
          height="240"
          src="/vid-cartoons.mp4"
          autoPlay
          loop
          muted
        />
        {/* <source
          src='https://the-weirdos.netlify.app/static/media/Home%20Video.d4bf2265b2f4a01a1582.mp4'
          type='video/mp4'
        /> */}
        Your browser does not support the video tag.
      </div>
    </section>
  )
}

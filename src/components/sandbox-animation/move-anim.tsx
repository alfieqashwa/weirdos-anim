import { type Variants, motion, useAnimate } from "framer-motion"
import { Akaya_Kanadaka } from "next/font/google"
import { useEffect, useState } from "react"
import { Box } from "./box"

const akayaKanadaka = Akaya_Kanadaka({
  weight: "400",
  subsets: ["kannada"],
})

export function MoveAnim() {
  const [scope, animate] = useAnimate()
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    animate([
      [
        ".box-1",
        {
          x: toggle ? "80rem" : 0,
          borderRadius: toggle ? "5%" : "50%",
          backgroundColor: toggle ? "rgb(217 70 239)" : "rgb(5 150 105)",
        },
        { duration: 2, ease: "easeIn" },
      ],
      [
        ".title-1",
        {
          color: toggle ? "rgb(5 150 105)" : "rgb(217 70 239)",
        },
        { duration: 2, ease: "easeInOut" },
      ],
    ])
  }, [animate, toggle])

  const variants: Variants = {
    initial: {
      x: 0,
      borderRadius: "5%",
      backgroundColor: "rgb(217 70 239)",
      transition: { duration: 2 },
    },
    animate: {
      x: "80rem",
      borderRadius: "50%",
      backgroundColor: "rgb(5 150 105)",
      transition: { duration: 2 },
    },
  }

  const onToggle = () => setToggle((t) => (t = !t))
  return (
    <div ref={scope} className={`space-y-4 ${akayaKanadaka.className}`}>
      <motion.button
        initial={{ backgroundColor: "rgb(5 150 105)" }}
        animate={{
          backgroundColor: toggle ? "rgb(217 70 239)" : "rgb(5 150 105)",
        }}
        transition={{ duration: 2 }}
        onClick={onToggle}
        className="h-10 w-10 rounded-md bg-emerald-600"
      />
      <Box
        variants={variants}
        initial="initial"
        animate={toggle ? "animate" : "initial"}
      />
      <button
        onMouseEnter={onToggle}
        className="box-1 grid h-32 w-32 place-content-center rounded-md transition-colors"
      >
        <h4 className="title-1 text-2xl font-bold">Akaya</h4>
      </button>
    </div>
  )
}

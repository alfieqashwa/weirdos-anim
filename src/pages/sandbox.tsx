import { AnimatePresence, type Variants, motion } from "framer-motion"
import { Akaya_Kanadaka } from "next/font/google"
import { useState } from "react"
import { MoveAnim } from "~/components/sandbox-animation/move-anim"

const akayaKanadaka = Akaya_Kanadaka({
  weight: "400",
  subsets: ["kannada"],
})

export default function SandboxPage() {
  const [toggle, setToggle] = useState(false)

  const variants: Variants = {
    initial: {
      x: 0,
      borderRadius: 0,
      transition: { duration: 2 },
    },
    animate: {
      x: 700,
      borderRadius: "50%",
      transition: { duration: 2 },
    },
  }

  const onToggle = () => setToggle((t) => (t = !t))
  return (
    <section
      className={`${akayaKanadaka.className}
    slate-50 mx-auto h-full min-h-screen w-full space-y-8 bg-slate-950`}
    >
      <div className="max-w-7xl p-12">
        <MoveAnim />
      </div>
    </section>
  )
}

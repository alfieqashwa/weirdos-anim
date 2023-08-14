import { gsap } from "gsap"
import { Akaya_Telivigala } from "next/font/google"
import Link from "next/link"
import { Fragment, useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"

export const Tagline = (): JSX.Element => (
  <div className="mt-8 flex h-full w-full flex-col items-start justify-center md:mt-0 md:w-1/2">
    <h2 className="w-full items-start text-center text-[2em] font-semibold capitalize leading-tight text-[#202020] md:w-4/5 md:text-left md:text-[3em]">
      Discover a new era of cool
      {/* // TODOS: Animate Dynamic text */}
      <TypingAnimation />
    </h2>
    <h3 className="mb-4 w-full text-center text-[1.25em] capitalize text-[#797979] md:text-left">
      Bored Of Apes? Try Something New.
    </h3>
    <div className="w-full text-center md:w-4/5 md:text-left">
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

const TypingAnimation = (): JSX.Element => {
  //! Hook.eslintreact-hooks/exhaustive-deps
  const strings = useMemo(
    () => [
      { text: "collectible items.", color: "#FFA500" },
      { text: "app killers.", color: "#FF0000" },
      { text: "nfts.", color: "#0000FF" },
    ],
    [],
  )

  const [stringIndex, setStringIndex] = useState(0)
  const [isReversed, setIsReversed] = useState(false)
  const [typedText, setTypedText] = useState("")
  const cursor = "|"

  useEffect(() => {
    const textToType = strings[stringIndex].text
    const currentIndex = typedText.length

    const interval = setInterval(
      () => {
        if (!isReversed) {
          if (currentIndex < textToType.length) {
            setTypedText(textToType.slice(0, currentIndex + 1))
          } else {
            setIsReversed(true)
            clearInterval(interval)
          }
        } else {
          if (currentIndex > 0) {
            setTypedText(textToType.slice(0, currentIndex - 1))
          } else {
            setIsReversed(false)
            setStringIndex((prevIndex) => (prevIndex + 1) % strings.length)
            setTypedText("")
          }
        }
      },
      isReversed ? 100 : 200,
    ) // Adjust typing speed as needed

    return () => clearInterval(interval)
  }, [isReversed, stringIndex, strings, typedText.length])

  return (
    <div className={`${akaya.className}`}>
      <span>
        <motion.span
          style={{ color: `${strings[stringIndex].color}` }}
          className="font-bold uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {typedText}
        </motion.span>
        {(typedText.length < strings[stringIndex].text.length ||
          isReversed) && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {cursor}
          </motion.span>
        )}
      </span>
    </div>
  )
}

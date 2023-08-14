import { Akaya_Telivigala } from "next/font/google"
import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"

const akaya = Akaya_Telivigala({
  weight: "400",
  subsets: ["latin-ext"],
})

export const TypingAnimation = (): JSX.Element => {
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

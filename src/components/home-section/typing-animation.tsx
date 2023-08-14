import { Akaya_Telivigala } from "next/font/google"
import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"

const akaya = Akaya_Telivigala({
  weight: "400",
  subsets: ["latin-ext"],
})

export const TypingAnimation = (): JSX.Element => {
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
            setIsCursorVisible(true) // Ensure cursor is visible before reversing
            setTimeout(() => {
              setIsReversed(true)
              setIsCursorVisible(false) // Hide cursor during delay before reversing
            }, 2000) // Delay 2 seconds before reversing the text
          }
        } else {
          if (currentIndex > 0) {
            setTypedText(textToType.slice(0, currentIndex - 1))
          } else {
            setIsReversed(false)
            setIsCursorVisible(true) // Show cursor before starting the next iteration
            setStringIndex((prevIndex) => (prevIndex + 1) % strings.length)
            setTypedText("")
          }
        }
      },
      isReversed ? 100 : 200,
    )

    return () => clearInterval(interval)
  }, [isReversed, stringIndex, strings, typedText])

  const [isCursorVisible, setIsCursorVisible] = useState(true)

  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setIsCursorVisible((prevIsCursorVisible) => !prevIsCursorVisible)
    }, 500)

    return () => clearInterval(cursorBlinkInterval)
  }, [])

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
        {(isCursorVisible || isReversed) && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
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

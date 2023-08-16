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
            setTimeout(() => {
              setIsReversed(true)
            }, 2000) // Delay 2 seconds before reversing the text
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
    )

    return () => clearInterval(interval)
  }, [isReversed, stringIndex, strings, typedText])

  return (
    <div className={`${akaya.className}`}>
      <span>
        <span
          style={{ color: `${strings[stringIndex].color}` }}
          className="font-bold uppercase"
        >
          {typedText}
        </span>
        <span className="animate-ping">{cursor}</span>
      </span>
    </div>
  )
}

import { AnimatePresence, motion, Variants } from "framer-motion"

type BoxProps = {
  title?: string
  variants?: Variants
  initial?: string
  animate?: string
  exit?: string
  onClick?: () => void
}

export const Box = (props: BoxProps): JSX.Element => {
  return (
    <AnimatePresence>
      <motion.div
        variants={props.variants}
        initial={props.initial}
        animate={props.animate}
        exit={props.exit}
        onClick={props.onClick}
        className="grid h-32 w-32 place-content-center rounded-md bg-white"
      >
        <h4 className="text-xl font-medium">{props.title}</h4>
      </motion.div>
    </AnimatePresence>
  )
}

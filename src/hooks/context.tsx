import { createContext, useContext } from "react"

export type ToggleType = {
  toggle: boolean
  setToggle: (t: boolean) => void
}

const initialValue = {
  toggle: false,
  setToggle: (_t: boolean) => { },
}

export const ToggleContext = createContext<ToggleType>(initialValue)

// custom hooks
export const useToggleContext = () => useContext(ToggleContext)

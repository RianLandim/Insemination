import { createContext, useContext } from "react";

type ButtonContextProps = {
  color: 'primary' | 'secondary'
}

export const ButtonContext = createContext<ButtonContextProps | null>(null)

export function useButtonContext() {
  const context = useContext(ButtonContext)

  if(!context) {
    throw new Error('Button.* has must be a child of Button')
  }
  return context
}
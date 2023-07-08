import { createContext, useContext } from "react";

interface FormControlContextProps {
  isInvalid: boolean
}

export const FormControlContext = createContext<FormControlContextProps | null>(null)

export function useFormControl() {
  const context = useContext(FormControlContext)

  if(!context) {
    throw Error('FormControl.* must be used in inside FormControl')
  }

  return context
}
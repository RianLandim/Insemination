import { VariantProps, tv } from 'tailwind-variants'
import { View } from 'react-native'
import { ReactNode } from 'react'

import { FormControlContext } from './Context'
import { ErrorMessage } from './ErrorMessage'

const formControl = tv({
  base: 'w-full flex-col',
  variants: {},
})

type FormControlVariants = VariantProps<typeof formControl>

interface FormControlProps extends FormControlVariants {
  isInvalid?: boolean
  children: ReactNode
}

function FormControl({ isInvalid = false, children }: FormControlProps) {
  return (
    <FormControlContext.Provider value={{ isInvalid }}>
      <View className={formControl({})}>{children}</View>
    </FormControlContext.Provider>
  )
}

FormControl.ErrorMessage = ErrorMessage

export default FormControl

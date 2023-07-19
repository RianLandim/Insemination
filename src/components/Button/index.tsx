import { VariantProps, tv } from 'tailwind-variants'
import { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { ButtonText } from './Text'
import { ButtonIcon } from './Icon'
import { ButtonContext } from './Context'

const button = tv({
  base: 'w-full p-2 items-center justify-center rounded-xl flex-row ',
  variants: {
    color: {
      primary: 'bg-white',
      secondary: 'bg-green-500',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

type ButtonVariants = VariantProps<typeof button>

interface ButtonProps extends TouchableOpacityProps, ButtonVariants {
  children: ReactNode
}

export function Button({ children, color = 'primary', ...rest }: ButtonProps) {
  return (
    <ButtonContext.Provider value={{ color }}>
      <TouchableOpacity
        className={button({ color })}
        activeOpacity={0.6}
        {...rest}
      >
        {children}
      </TouchableOpacity>
    </ButtonContext.Provider>
  )
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export default Button

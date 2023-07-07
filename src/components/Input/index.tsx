import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { VariantProps, tv } from "tailwind-variants";
import { InputIcon } from "./Icon";
import clsx from "clsx";

const input = tv({
  base: 'flex-row w-full rounded-xl p-3 item-center justify-center',
  variants: {
    variant: {
      filled: 'bg-white'
    }
  },
  defaultVariants: {
    variant: 'filled'
  }
})

type InputVariantProps = VariantProps<typeof input>

interface InputProps  extends TextInputProps, InputVariantProps {
  leftContent?: ReactNode,
  rightContent?: ReactNode
}

function Input({ leftContent, rightContent, variant ,...rest } : InputProps) {
  return (
    <View className={input({variant})}>
      {leftContent}
      <TextInput 
        className={clsx("text-base text-black", {
          'w-[90%]': !!leftContent || !!rightContent,
          'w-[80%]': !!rightContent && !!leftContent
        })}
        placeholderTextColor={"grey"}
        {...rest}
      />
      {rightContent}
    </View>
  )
}

Input.Icon = InputIcon
export default Input
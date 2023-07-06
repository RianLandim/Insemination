import { ReactNode } from "react";
import { Text } from "react-native";
import { tv, VariantProps } from "tailwind-variants";
import { useButtonContext } from "./Context";

const buttonText = tv({
  base: "font-bold text-base",
  variants: {
    color: {
      primary: "text-black",
      secondary: "text-white",
    },
  },
});

type ButtonTextVariant = VariantProps<typeof buttonText>;

interface ButtonTextProps extends ButtonTextVariant {
  children: ReactNode;
}

export function ButtonText({ children }: ButtonTextProps) {
  const { color } = useButtonContext()

  return <Text className={buttonText({color})}>{children}</Text>;
}

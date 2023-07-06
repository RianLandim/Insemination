import { ReactNode } from "react";
import { View } from "react-native";

interface ButtonIconProps {
  children: ReactNode;
}

export function ButtonIcon({ children }: ButtonIconProps) {
  return <View className="mr-3">{children}</View>;
}
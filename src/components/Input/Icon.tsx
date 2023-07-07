import { ElementType } from "react";
import { View } from "react-native";

interface InputIconProps {
  icon: ElementType
}

export function InputIcon({ icon: Icon } : InputIconProps) {
  return (
    <View>
      <Icon className="mr-2" />
    </View>
  )
}
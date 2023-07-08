import { VariantProps, tv } from "tailwind-variants";
import { FormControlContext } from "./Contex";
import { View } from "react-native";

const formControl = tv({
  base: 'w-full flex-col',
  variants: {}
})

type FormControlVariants = VariantProps<typeof formControl>

interface FormControlProps extends FormControlVariants {
  isInvalid?: boolean
}

function FormControl({ isInvalid = false } : FormControlProps) {
  return (
    <FormControlContext.Provider value={{ isInvalid }}>
      <View className={formControl({})}></View>
    </FormControlContext.Provider>
  )
}

export default FormControl

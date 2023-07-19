import { ReactNode } from 'react'
import { Modal as ModalPrimitive, ModalProps, View } from 'react-native'

type Props = ModalProps & {
  children: ReactNode
}

function Modal({
  children,
  animationType = 'slide',
  transparent = false,
  ...rest
}: Props) {
  return (
    <ModalPrimitive
      animationType={animationType}
      transparent={transparent}
      {...rest}
    >
      <View className="absolute bottom-0 left-0 right-0 top-0 bg-slate-300 p-8">
        {children}
      </View>
    </ModalPrimitive>
  )
}

export default Modal

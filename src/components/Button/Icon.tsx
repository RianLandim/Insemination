import { type ElementType } from 'react'
import { View } from 'react-native'
import { useButtonContext } from './Context'
import { type IconProps } from 'phosphor-react-native'

interface ButtonIconProps {
  icon: ElementType<IconProps>
  weight: IconProps['weight']
}

export function ButtonIcon ({ icon: Icon, weight }: ButtonIconProps) {
  const { color } = useButtonContext()

  return (
    <View className="mr-3">
      <Icon
        color={ color === 'primary' ? 'black' : 'white' }
        weight={weight}
      />
    </View>
  )
}

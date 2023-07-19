import { ReactNode } from 'react'
import { Text } from 'react-native'

type Props = {
  children: ReactNode
}

export function ErrorMessage({ children }: Props) {
  return (
    <Text className="font-heading mt-1 text-sm text-red-500">{children}</Text>
  )
}

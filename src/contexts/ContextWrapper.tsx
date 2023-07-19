import { RealmProvider } from '@realm/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function ContextsWrapper({ children }: Props) {
  return <RealmProvider>{children}</RealmProvider>
}

import { RealmProvider } from '@realm/react'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function ContextsWrapper({ children }: Props) {
  return <RealmProvider>{children}</RealmProvider>
}

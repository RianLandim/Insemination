import { RealmProvider } from '@realm/react'
import React, { ReactNode } from 'react'

import { schemas } from '@/database'

type Props = {
  children: ReactNode
}

export default function ContextsWrapper({ children }: Props) {
  return <RealmProvider schema={schemas}>{children}</RealmProvider>
}

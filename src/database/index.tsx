import { createRealmContext } from '@realm/react'

import { Cow } from './schemas/cow'

const realmConfig: Realm.Configuration = {
  schema: [Cow],
}

export const realmContext = createRealmContext(realmConfig)

export const schemas = [Cow]

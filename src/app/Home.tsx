import { ScrollView, Text, View } from 'react-native'
import { useQuery, useRealm } from '@realm/react'

import Button from '@/components/Button'
import { Cow } from '@/database/schemas/cow'

export default function Home() {
  const realm = useRealm()

  function addCow() {
    realm.write(() => {
      realm.create<Cow>('Cow', {
        _id: new Realm.BSON.ObjectID(),
        name: 'mimosa',
        origin: 'teste',
        code: 'teste',
        birthdate: new Date(),
      })
    })
  }

  const cows = useQuery<Cow>('Cow')

  return (
    <View className="item-center flex-1 justify-center p-8">
      <ScrollView>
        {cows.map((cow) => (
          <View key={cow._id.toHexString()}>
            <Text>{cow.name}</Text>
            <Text>{cow.birthdate.toDateString()}</Text>
          </View>
        ))}
      </ScrollView>
      <Button color="primary" onPress={() => addCow()}>
        <Button.Text>Adicionar</Button.Text>
      </Button>
    </View>
  )
}

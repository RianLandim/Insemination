import { useObject } from '@realm/react'
import { useRouter, useSearchParams } from 'expo-router'
import { Image, Text, View } from 'react-native'
import { BSON } from 'realm'

import { Cow } from '@/database/schemas/cow'
import { formatFullDate } from '@/utils/format-date'
import Button from '@/components/Button'

export default function CowDetails() {
  const { id } = useSearchParams()
  const router = useRouter()

  const cow = useObject(Cow, new BSON.ObjectID(id))

  return (
    <View className="flex-1 items-center justify-center bg-slate-200">
      <View className="h-4/6 w-full">
        <Image
          source={{
            uri: 'https://pratodoamanha.com.br/wp-content/uploads/2022/08/como-os-bois-veem-740x400.jpg',
          }}
          alt="Cow"
          resizeMode="cover"
          className="h-[105%] w-full"
        />
      </View>
      <View className="h-2/6 w-full justify-evenly rounded-t-3xl bg-white p-8">
        <Text className="text-xl font-bold capitalize">Nome: {cow?.name}</Text>
        <Text className="text-xl font-bold capitalize">
          Brinco: {cow?.code}
        </Text>
        <Text className="text-xl font-bold capitalize">
          Origem: {cow?.origin}
        </Text>

        <Text className="text-xl font-bold capitalize">
          Nascimento: {formatFullDate(cow?.birthdate ?? 0)}
        </Text>
        <Button color="secondary" onPress={() => router.back()}>
          <Button.Text>Voltar</Button.Text>
        </Button>
      </View>
    </View>
  )
}

import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native'
import { useQuery, useRealm } from '@realm/react'
import React, { useState } from 'react'
import { z } from 'zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '@/components/Button'
import { Cow } from '@/database/schemas/cow'
import Modal from '@/components/Modal'
import FormControl from '@/components/FormControl'
import Input from '@/components/Input'
import { formatFullDate } from '@/utils/format-date'

export default function Home() {
  const [open, setOpen] = useState(false)

  const cows = useQuery<Cow>('Cow')

  return (
    <View className="item-center mt-6 flex-1 justify-around p-8">
      <View className="w-full flex-1 flex-row items-center justify-between">
        <Text className="text-2xl font-bold uppercase">Gado</Text>
        <View className="w-1/2 flex-row items-center justify-evenly">
          <Text>Rian Landim</Text>
          <View className="rounded-full bg-violet-500 p-2">
            <Text>RL</Text>
          </View>
        </View>
      </View>
      <View className="items-center justify-center">
        <CreateCowDialog open={open} onDissmis={() => setOpen(!open)} />
      </View>
      <View className="w-full flex-[3] items-center justify-center">
        <View className="mb-3 w-full">
          <Input variant="filledWhite" placeholder="Pesquisar" />
        </View>
        <FlatList
          data={cows}
          className="w-full"
          contentContainerStyle={{ gap: 12 }}
          keyExtractor={(item) => item._id.toHexString()}
          renderItem={({ item }) => (
            <View className="w-full items-center justify-evenly rounded-md bg-white p-8">
              <Text>{item.name}</Text>
              <Text>{formatFullDate(item.birthdate)}</Text>
            </View>
          )}
        />
      </View>
      <View className="item-center flex-1 justify-center">
        <Button color="secondary" onPress={() => setOpen(true)}>
          <Button.Text>Adicionar</Button.Text>
        </Button>
      </View>
    </View>
  )
}

type CowDialog = {
  open: boolean
  onDissmis: () => void
}

const newCowSchema = z.object({
  name: z.string(),
  code: z.string(),
  birthdate: z.string(),
  origin: z.string(),
})

export type NewCowSchemaProps = z.infer<typeof newCowSchema>

function CreateCowDialog({ open, onDissmis }: CowDialog) {
  const realm = useRealm()

  const { control, handleSubmit } = useForm<NewCowSchemaProps>({
    resolver: zodResolver(newCowSchema),
  })

  const submit: SubmitHandler<NewCowSchemaProps> = (data) => {
    console.log(data)
    addCow(data)
  }

  function addCow({ birthdate, code, name, origin }: NewCowSchemaProps) {
    realm.write(() => {
      realm.create<Cow>('Cow', {
        _id: new Realm.BSON.ObjectID(),
        name,
        origin,
        code,
        birthdate: new Date(),
      })
    })
    onDissmis()
  }

  return (
    <Modal visible={open} onRequestClose={onDissmis}>
      <View className="flex-1 ">
        <View className="w-full flex-1 items-center justify-center">
          <Text className="text-xl font-bold uppercase text-black">
            Adicione o novo Gado
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="w-full flex-1 items-center justify-evenly"
        >
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <FormControl>
                <Input
                  placeholder="Nome"
                  value={value}
                  onChangeText={(val) => onChange(val)}
                />
                <FormControl.ErrorMessage>
                  {errors.name?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="origin"
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <FormControl>
                <Input
                  placeholder="Origem"
                  value={value}
                  onChangeText={(val) => onChange(val)}
                />
                <FormControl.ErrorMessage>
                  {errors.origin?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="code"
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <FormControl>
                <Input
                  placeholder="Brinco"
                  value={value}
                  onChangeText={(val) => onChange(val)}
                />
                <FormControl.ErrorMessage>
                  {errors.code?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="birthdate"
            render={({ field: { value, onChange }, formState: { errors } }) => (
              <FormControl>
                <Input
                  placeholder="Nascimento"
                  value={value}
                  onChangeText={(val) => onChange(val)}
                />
                <FormControl.ErrorMessage>
                  {errors.birthdate?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
          />
        </KeyboardAvoidingView>
        <View className="w-full flex-1 items-center justify-evenly">
          <Button color="secondary" onPress={handleSubmit(submit)}>
            <Button.Text>Salvar</Button.Text>
          </Button>
          <Button color="primary" onPress={onDissmis}>
            <Button.Text>Voltar</Button.Text>
          </Button>
        </View>
      </View>
    </Modal>
  )
}

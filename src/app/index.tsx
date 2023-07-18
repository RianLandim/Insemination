import { Text, View } from 'react-native'
import {
  GoogleLogo,
  AppleLogo,
  Envelope,
  Eye,
  Lock,
} from 'phosphor-react-native'
import { useState } from 'react'

import Input from '@/components/Input'
import Button from '@/components/Button'

export default function SignIn() {
  const [value, setValue] = useState('')

  return (
    <View className="w-full flex-1 items-center justify-center bg-slate-200">
      <View className="w-full flex-1 items-center justify-evenly p-8">
        <Button>
          <Button.Icon icon={GoogleLogo} weight="bold" />
          <Button.Text>Entrar com Google</Button.Text>
        </Button>
        <Button>
          <Button.Icon icon={AppleLogo} weight="fill" />
          <Button.Text>Entrar com Apple</Button.Text>
        </Button>
      </View>
      <Text>Ou continue com email</Text>
      <View className="w-full flex-1 items-center justify-evenly p-8">
        <Input
          leftContent={<Input.Icon icon={Envelope} />}
          value={value}
          onChangeText={(val) => setValue(val)}
          placeholder="Email"
        />
        <Input
          leftContent={<Input.Icon icon={Lock} />}
          rightContent={<Input.Icon icon={Eye} />}
          value={value}
          onChangeText={(val) => {
            setValue(val)
          }}
          placeholder="Email"
        />
        <Text className="self-start text-slate-500">Esqueceu a senha?</Text>
      </View>
    </View>
  )
}

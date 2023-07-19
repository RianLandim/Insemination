import { Text, View } from 'react-native'
import {
  GoogleLogo,
  AppleLogo,
  Envelope,
  Eye,
  Lock,
  EyeClosed,
} from 'phosphor-react-native'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'expo-router'

import Input from '@/components/Input'
import Button from '@/components/Button'
import FormControl from '@/components/FormControl'

const formSchema = z.object({
  email: z
    .string({ required_error: 'Campo Obrigatorio' })
    .email('Email invalido'),
  password: z.string({ required_error: 'Campo Obrigatorio' }).min(8),
})

type FormSchemaProps = z.infer<typeof formSchema>

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(true)

  const router = useRouter()

  const { control, handleSubmit } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
  })

  const submit: SubmitHandler<FormSchemaProps> = (data) => {
    console.log(data)
  }

  return (
    <View className="w-full flex-1 items-center justify-center bg-slate-200">
      <View className="w-full flex-1 items-center justify-evenly p-8">
        <Button onPress={() => router.push('/Home')}>
          <Button.Icon icon={GoogleLogo} weight="bold" />
          <Button.Text>Entrar com Google</Button.Text>
        </Button>
        <Button>
          <Button.Icon icon={AppleLogo} weight="fill" />
          <Button.Text>Entrar com Apple</Button.Text>
        </Button>
      </View>
      <View>
        <Text className="text-xl font-semibold capitalize">
          Ou continue com email
        </Text>
      </View>
      <View className="w-full flex-1 items-center justify-evenly p-8">
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <FormControl isInvalid={!!errors.email}>
              <Input
                leftContent={<Input.Icon icon={Envelope} />}
                value={value}
                onChangeText={(val) => onChange(val)}
                placeholder="Email"
              />
              <FormControl.ErrorMessage>
                {errors.email?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <FormControl>
              <Input
                leftContent={<Input.Icon icon={Lock} />}
                rightContent={
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Input.Icon icon={showPassword ? EyeClosed : Eye} />
                  </TouchableOpacity>
                }
                value={value}
                secureTextEntry={showPassword}
                onChangeText={(val) => {
                  onChange(val)
                }}
                placeholder="Senha"
              />
              <FormControl.ErrorMessage>
                {errors.password?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />

        <Text className="self-start text-slate-500">Esqueceu a senha?</Text>

        <Button color="secondary" onPress={handleSubmit(submit)}>
          <Button.Text>Entrar</Button.Text>
        </Button>
      </View>
    </View>
  )
}

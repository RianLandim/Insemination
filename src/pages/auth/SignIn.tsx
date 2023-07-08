import { View } from "react-native";
import Button from "../../components/Button";
import { GoogleLogo, AppleLogo, Envelope, Eye, Lock } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import Input from "../../components/Input";
import { useState } from "react";

export function SignIn() {
  const [value, setValue] = useState('')

  return (
    <SafeAreaView className="flex-1 w-full items-center justify-center">
      <View className="flex-1 w-full items-center justify-around p-8">
        <Button color="secondary">
          <Button.Icon icon={GoogleLogo} weight="bold" />
          <Button.Text>Entrar com Google</Button.Text>
        </Button>
        <Button>
          <Button.Icon icon={AppleLogo} weight="fill" />
          <Button.Text>Entrar com Apple</Button.Text>
        </Button>
      </View>
      <View className="flex-1 w-full items-center justify-around p-8">
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
          onChangeText={(val) => setValue(val)}
          placeholder="Email"
        />
      </View>
    </SafeAreaView>
  );
}

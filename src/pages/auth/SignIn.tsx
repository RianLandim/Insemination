import { SafeAreaView, View } from "react-native";
import Button from "../../components/Button";
import { GoogleLogo, AppleLogo } from "phosphor-react-native";

export function SignIn() {
  return (
    <SafeAreaView className="flex-1 w-full items-center justify-center">
      <View className="flex-1 w-full items-center justify-around p-8">
        <Button color="secondary">
          <Button.Icon>
            <GoogleLogo size={32} weight="bold" />
          </Button.Icon>
          <Button.Text>Entrar com Google</Button.Text>
        </Button>
        <Button>
          <Button.Icon>
            <AppleLogo size={32} weight="fill" />
          </Button.Icon>
          <Button.Text>Entrar com Apple</Button.Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

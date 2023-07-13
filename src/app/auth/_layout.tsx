import { Tabs } from 'expo-router'
import { Lock, SignIn } from 'phosphor-react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function TabsLayout () {
  return (
    <SafeAreaProvider>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name='SignIn' options={{ tabBarIcon: SignIn, tabBarLabel: 'Entrar' }} />
        <Tabs.Screen name='SignUp' options={{ tabBarIcon: Lock, tabBarLabel: 'Registre-se' }} />
      </Tabs>
    </SafeAreaProvider>
  )
}

import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native'

export default function Welcome () {
  return (
    <SafeAreaView>
      <Link href={'/auth/SignIn'}>Teste</Link>
    </SafeAreaView>
  )
}

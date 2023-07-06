import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { NavigationContainer } from "@react-navigation/native";

export function AuthTabRoutes() {

  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator> 
        <Tab.Screen name='signIn' component={SignIn} />
        <Tab.Screen name='signUp' component={SignUp} />        
      </Tab.Navigator>
    </NavigationContainer>
  )
}
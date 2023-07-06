import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AuthTabRoutes } from '../pages/auth';

const Tab = createMaterialTopTabNavigator();

export default function Routes() {
  return (
    <AuthTabRoutes />
  );
}
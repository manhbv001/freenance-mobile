import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { theme } from './ configs/colors.config';
import navigationConfig from './ configs/navigation.config';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider theme={extendTheme(theme)}>
      <NavigationContainer>
        <Stack.Navigator>
          {navigationConfig.navigationRoutes.map((e) => (
            <Stack.Screen key={e.name} {...e} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

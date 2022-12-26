import { NativeBaseProvider, extendTheme } from "native-base";
import { theme } from "./ configs/colors.config";
import HomeScreen from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateCategoryScreen from "./screens/CreateCategory";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider theme={extendTheme(theme)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="CreateCategory"
            options={{ title: "Theem chuyen muc"}}
            component={CreateCategoryScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

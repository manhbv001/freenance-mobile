import { NativeBaseProvider, extendTheme } from "native-base";
import { theme } from "./ configs/colors.config";
import HomeScreen from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateCategoryScreen from "./screens/CreateCategory";
import SearchScreen from "./screens/Search/ index";
import SettingsScreen from "./screens/Settings";

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
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CreateCategory"
            options={{ title: "Theem chuyen muc" }}
            component={CreateCategoryScreen}
          />
          <Stack.Screen
            name="Search"
            options={{ title: "Tim kiem" }}
            component={SearchScreen}
          />
          <Stack.Screen
            name="Settings"
            options={{ title: "Cau hinh" }}
            component={SettingsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

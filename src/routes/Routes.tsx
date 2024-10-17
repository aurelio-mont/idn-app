import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import Detail from "../views/Detail";
import { RootStackParam } from "../types";

const Stack = createNativeStackNavigator<RootStackParam>();

const routeScreenDefinitions = {
  headerStyle: {
    backgroundColor: "rgba(7,26,93,255)",
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routeScreenDefinitions}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={routeScreenDefinitions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

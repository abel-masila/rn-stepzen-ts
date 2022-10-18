import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";

import utilities from "./tailwind.json";
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}

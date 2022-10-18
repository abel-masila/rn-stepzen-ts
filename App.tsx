import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import Customers from "./screens/Customers";
import utilities from "./tailwind.json";

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Customers />
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
});

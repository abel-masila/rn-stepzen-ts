import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import Customers from "./screens/Customers";
import utilities from "./tailwind.json";

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <Customers />
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

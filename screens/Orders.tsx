import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { SafeAreaView } from "react-native-safe-area-context";

const Orders = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <Text style={tw("text-blue-500")}>Orders</Text>
    </SafeAreaView>
  );
};

export default Orders;

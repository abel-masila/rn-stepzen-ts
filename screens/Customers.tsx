import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import { useTailwind } from "tailwind-rn";

export default function Customers() {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <Text style={tw("text-blue-500")}>Customers</Text>
    </SafeAreaView>
  );
}

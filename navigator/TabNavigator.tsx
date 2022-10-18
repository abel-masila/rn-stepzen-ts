import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Customers from "../screens/Customers";
import Orders from "../screens/Orders";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Customers" component={Customers} />
      <Tab.Screen name="Orders" component={Orders} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Customers from "../screens/Customers";
import Orders from "../screens/Orders";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Customers" component={Customers} />
      <Tab.Screen name="Orders" component={Orders} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

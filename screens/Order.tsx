import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { RootStackParamList } from "../navigator/RootNavigator";
import DeliveryCard from "../components/DeliveryCard";

type OrderRouteProp = RouteProp<RootStackParamList, "Order">;
const Order = () => {
  const tw = useTailwind();
  const navigation = useNavigation();

  const {
    params: { order },
  } = useRoute<OrderRouteProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTintColor: "#eb6a7c",
      headerTitleStyle: { color: "black" },
      headerBackTitle: "Deliveries",
    });
  }, []);
  return (
    <View style={tw("-mt-2")}>
      <DeliveryCard order={order} fullWidth />
    </View>
  );
};

export default Order;

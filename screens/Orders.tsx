import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabStackParamList } from "../navigator/TabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useOrders from "../hooks/useOrders";
import { Button, Image } from "@rneui/themed";
import OrderCard from "../components/OrderCard";

type OrderRouteProp = RouteProp<RootStackParamList, "Order">;

export type OrderScreenProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

const Orders = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrderScreenProp>();

  const { loading, error, orders } = useOrders();

  const [asc, setAsc] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color, position }) => {
        <Text style={{ color: focused ? "#eb6a7c" : color, fontSize: 10 }}>
          Orders
        </Text>;
      },
    });
  }, []);
  return (
    <ScrollView style={{ backgroundColor: "#eb6a7c" }}>
      <Image
        source={{ uri: "https:links.papareact.com/m51" }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View>
        <Button
          onPress={() => setAsc(!asc)}
          color="pink"
          titleStyle={{ color: "gray", fontWeight: "400" }}
          style={tw("py-2 px-5 ")}
        >
          {asc ? "Showing Oldest First" : "Showing Most Recent First"}
        </Button>
      </View>
      {orders
        ?.sort((a, b) => {
          if (asc) {
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
          } else {
            return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
          }
        })
        .map((order) => (
          <OrderCard key={order.trackingId} item={order} />
        ))}
    </ScrollView>
  );
};

export default Orders;

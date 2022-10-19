import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

export type ModalScreenProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ModalScreenProp>();

  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <View>
      <TouchableOpacity
        style={tw("absolute right-5 top-5 z-10 ")}
        onPress={() => navigation.goBack()}
      >
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>
      <View style={{ marginTop: 10 }}>
        <View style={[tw("py-5 border-b"), { borderColor: "#59c1cc" }]}>
          <Text
            style={[tw("text-center text-xl font-bold"), { color: "#59c1cc" }]}
          >
            {name}
          </Text>
          <Text style={[tw("text-center text-sm italic")]}>deliveries</Text>
        </View>
      </View>
      <FlatList
        data={orders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    </View>
  );
};

export default ModalScreen;

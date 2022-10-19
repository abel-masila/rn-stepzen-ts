import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Card, Divider, Icon } from "@rneui/themed";
import MapView, { Marker } from "react-native-maps";

type Props = {
  order: Order;
  fullWidth?: boolean;
};
const DeliveryCard = ({ order, fullWidth }: Props) => {
  const tw = useTailwind();
  return (
    <Card
      containerStyle={[
        tw(`${fullWidth ? "rounded-none m-0" : "rounded-lg"} my-2`),
        {
          backgroundColor: fullWidth ? "#eb6a7c" : "#59c1cc",
          padding: 0,
          paddingTop: 16,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      ]}
    >
      <View style={fullWidth && { height: "100%" }}>
        <Icon name="box" type="entypo" color="#fff" />

        <View>
          <Text
            style={tw("text-xs text-center uppercase text-white font-bold")}
          >
            {order.carrier} - {order.trackingId}
          </Text>
          <Text
            style={tw("text-lg text-center text-center font-bold text-white")}
          >
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Divider color="white" />
        </View>

        <View style={tw("mx-auto  pb-5")}>
          <Text style={tw("text-center text-white font-bold mt-5 text-base")}>
            Address
          </Text>
          <Text style={tw("text-sm text-center text-white")}>
            {order.Address}, {order.City}
          </Text>
          <Text style={tw("text-sm text-center italic text-white ")}>
            Shipping Cost: ${order.shippingCost}
          </Text>
        </View>
      </View>
      <Divider color="white" />

      <View style={tw("p-5")}>
        {order.trackingItems.items.map((item) => (
          <View style={tw("flex-row justify-between items-center")}>
            <Text style={tw("text-sm italic text-white")}>{item.name}</Text>
            <Text style={tw("text-xl  text-white")}>x {item.quantity}</Text>
          </View>
        ))}
      </View>

      <MapView
        initialRegion={{
          latitude: order.Lat,
          longitude: order.Lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={[tw("w-full"), !fullWidth && { height: 200 }, { flexGrow: 1 }]}
      >
        {order.Lat && order.Lng && (
          <Marker
            coordinate={{
              latitude: order.Lat,
              longitude: order.Lng,
            }}
            title="Delivery Location"
            description={order.Address}
            identifier="destination"
          />
        )}
      </MapView>
    </Card>
  );
};

export default DeliveryCard;

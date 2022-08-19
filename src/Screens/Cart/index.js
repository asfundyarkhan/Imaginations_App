import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { Appbar, Surface, Avatar, Snackbar, Button } from "react-native-paper";
import { theme } from "../../../App.styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import styles from "./styles";

const CartScreen = () => {
  const navigation = useNavigation();
  const { items, totalPrice } = useSelector((state) => state.Cart);

  const [isVisible, setVisible] = useState(false);
  // const [total, setTotal] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: theme.colors.accent }}>
        <Appbar.BackAction
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content
          color="white"
          title="Cart"
          titleStyle={{ alignSelf: "center" }}
        />
      </Appbar.Header>

      {items.length ? (
        <View style={{ flex: 1, margin: 5 }}>
          <Text style={styles.heading}>Your Currently Selected items </Text>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={(val) => {
              return (
                <Pressable onLongPress={() => setVisible(true)}>
                  <Surface style={styles.surfaceStyle}>
                    <View style={styles.insideSurfaceview}>
                      {console.log("sdsdsdsdsd", totalPrice)}
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Avatar.Image size={80} source={val.item.img} />
                        <Text style={styles.textStyle}>{val.item.name}</Text>
                      </View>

                      <Text>
                        {val.item.quantity} X{" "}
                        <Text style={{ fontSize: 24, fontWeight: "600" }}>
                          {val.item.price}
                        </Text>
                      </Text>
                    </View>
                  </Surface>
                </Pressable>
              );
            }}
          />

          <Pressable
            style={styles.btnStyle}
            onPress={() => navigation.navigate("PaymentMethod")}
          >
            <Text style={{ color: "white", fontSize: 10 }}>Total Price : </Text>
            <Text style={{ color: "white", fontSize: 20 }}>{totalPrice}</Text>
          </Pressable>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, color: theme.colors.accent }}>
            Your cart is Currently empty
          </Text>
        </View>
      )}

      <Snackbar
        visible={isVisible}
        onDismiss={() => setVisible(false)}
        duration={1000}
      >
        item is being removed
      </Snackbar>
    </View>
  );
};

export default CartScreen;

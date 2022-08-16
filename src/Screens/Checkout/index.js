import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Snackbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../../App.styles";
import Sizes from "../../components/Sizes";
import { addToCart } from "../../store/features/cartSlice";

const ItemFinalizing = () => {
  const { params } = useRoute();
  const { name, img, price, description, id } = params;
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.Cart);

  const navigation = useNavigation();

  const [isVisible, setVisible] = useState(true);
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView>
        <Image
          source={img}
          resizeMode="cover"
          style={{ width: "100%", height: "40%" }}
        />
        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 30, fontWeight: "800", marginBottom: 10 }}>
            {name}
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "600", marginBottom: 10 }}>
            Description
          </Text>
          {description.map((val) => (
            <Text style={{ fontSize: 15, marginBottom: 5 }}>{val}</Text>
          ))}
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              marginBottom: 10,
              marginTop: 5,
            }}
          >
            Size
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Sizes text={"S"} />
            <Sizes text={"M"} />
            <Sizes text={"L"} />
            <Sizes text={"XL"} />
            <Text
              style={{
                alignSelf: "center",
                justifyContent: "flex-end",
              }}
            >
              In-Stock
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "600",
                marginTop: 5,
              }}
            >
              Quantity :
            </Text>
            <TextInput
              placeholder="1"
              value={quantity}
              keyboardType="numeric"
              onChangeText={(val) => setQuantity(val)}
              style={{
                marginLeft: 50,
                flex: 0.5,
                padding: 10,
                // backgroundColor: theme.colors.accent,
                borderRadius: theme.roundness,
                backgroundColor: "rgba(108, 108, 108, 0.2)",
                paddingHorizontal: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "600",
              }}
            >
              Price :
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "600",
              }}
            >
              {price}rs
            </Text>
          </View>
          <Button
            mode="text"
            onPress={() => {
              console.log("is visiblexs");
              setVisible(true);
              dispatch(addToCart({ name, img, price, quantity, id }));
            }}
          >
            <Text style={{ color: "#6c6c6c" }}>Add to Cart</Text>
          </Button>
          {/* <Snackbar
            visible={isVisible}
            onDismiss={() => setVisible(false)}
            duration={7000}
            style={{ position: "absolute", justifyContent: "flex-end" }}
          >
            Your item Added to the cart
          </Snackbar> */}

          <Button
            mode="text"
            onPress={() => {
              navigation.navigate("CartScreen");
              console.log(items);
              setVisible(true);
            }}
          >
            <Text style={{ color: "#6c6c6c" }}>View Cart</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ItemFinalizing;

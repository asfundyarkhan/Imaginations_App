import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { Appbar, Surface, Avatar, Snackbar, Button } from "react-native-paper";
import { theme } from "../../../App.styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";

const ProductSelection = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  return (
    <View style={styles.mainContainer}>
      <Appbar.Header style={styles.headerBackground}>
        <Appbar.BackAction
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content
          color="white"
          title=""
          titleStyle={{ alignSelf: "center" }}
        />
      </Appbar.Header>

      {params.length ? (
        <View style={styles.mainBodyContainer}>
          <FlatList
            data={params}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => <View />}
            ListHeaderComponentStyle={{ marginTop: 10 }}
            renderItem={(val) => {
              return (
                <Pressable
                  onPress={() => navigation.navigate("Checkout", val.item)}
                >
                  <Surface style={styles.surfaceStyle}>
                    <View style={styles.insideSurfaceview}>
                      <View style={styles.imageWithTextContainer}>
                        <Avatar.Image size={80} source={val.item.img} />
                        <Text style={styles.textStyle}>{val.item.name}</Text>
                      </View>

                      <Text style={styles.textStyle}>
                        Rs : {val.item.price}{" "}
                      </Text>
                    </View>
                  </Surface>
                </Pressable>
              );
            }}
          />
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyScreenText}>No Available Product</Text>
        </View>
      )}
    </View>
  );
};

export default ProductSelection;

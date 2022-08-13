import {
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { Avatar, Appbar, Surface } from "react-native-paper";
import { View } from "react-native";
import styles from "./styles";
import categories from "../../dummyData/categories";
import sizeCharts from "../../dummyData/sizeCharts";
import featured from "../../dummyData/featured";
import { theme } from "../../../App.styles";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Appbar.Header style={{ backgroundColor: theme.colors.accent }}>
          <Appbar.BackAction
            color="white"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Appbar.Content color="white" title="Home" />
        </Appbar.Header>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Avatar.Image
            size={40}
            source={require("../../../assets/emptyUser.jpg")}
          />
          <Text>Hello</Text>
        </View>

        <View
          style={{
            // flex: 0.35,
            height: 180,
          }}
        >
          <Image
            style={{
              //  flex: 1,
              width: "100%",
              height: "100%",
              borderRadius: 40,
              position: "absolute",
            }}
            source={require("../../../assets/sixPocketTrouserBlack.jpeg")}
          />
          <Text
            style={{
              position: "absolute",
              fontSize: 40,
              marginTop: "13%",
              marginHorizontal: "5%",
            }}
          >
            Flat
          </Text>
          <Text
            style={{
              position: "absolute",
              fontSize: 30,
              marginTop: "24%",
              marginLeft: "75%",
            }}
          >
            20% OFF
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.textHeading}>Categories</Text>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponentStyle={{ marginStart: 10 }}
            ListHeaderComponent={() => <View />}
            renderItem={(val) => {
              return (
                <Pressable onPress={() => console.log("helpp")}>
                  <Surface
                    style={{
                      backgroundColor: theme.colors.accent,
                      padding: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 5,
                      borderRadius: 20,
                    }}
                  >
                    <Avatar.Image size={50} source={val.item.img} />
                    <Text style={{ margin: 5 }}>{val.item.name}</Text>
                  </Surface>
                </Pressable>
              );
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.textHeading}>Featured</Text>
          <FlatList
            data={featured}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponentStyle={{ marginStart: 10 }}
            ListHeaderComponent={() => <View />}
            renderItem={(val) => {
              return (
                <Pressable onPress={() => console.log("helpp")}>
                  <Surface
                    style={{
                      backgroundColor: theme.colors.accent,
                      padding: 20,
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 5,
                      borderRadius: 20,
                    }}
                  >
                    <Avatar.Image size={80} source={val.item.img} />
                    <Text
                      style={{ marginTop: 5, marginBottom: 3, fontSize: 12 }}
                    >
                      {val.item.color}
                    </Text>
                    <Text style={{ fontSize: 20 }}>{val.item.name}</Text>
                  </Surface>
                </Pressable>
              );
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.textHeading}>Size Charts</Text>
          <FlatList
            data={sizeCharts}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponentStyle={{ marginStart: 10 }}
            ListHeaderComponent={() => <View />}
            renderItem={(val) => {
              return (
                <Pressable
                  style={{
                    alignItems: "center",
                    marginVertical: 40,
                    marginHorizontal: 20,
                  }}
                  onPress={() => console.log("helpp")}
                >
                  <Avatar.Image size={50} source={val.item.img} />
                  <Text style={{ margin: 5 }}>{val.item.name}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
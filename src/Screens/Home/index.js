import {
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Avatar, Appbar, Surface } from "react-native-paper";
import { View } from "react-native";
import styles from "./styles";
import categories from "../../dummyData/categories";
import sizeCharts from "../../dummyData/sizeCharts";
import featured from "../../dummyData/featured";
import { theme } from "../../../App.styles";
import { useNavigation } from "@react-navigation/native";
import SubCatergoriesModal from "../../Modals/Categories";
import Kids from "../../dummyData/kids";
import SizeChartModal from "../../Modals/SizeChart";

const Home = () => {
  const navigation = useNavigation();

  const [isVisible, setVisibilty] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [title, setTitle] = useState("");
  const [iSSizeChartVisbile, setSizeChartVisibility] = useState(false);

  const handleModalPressable = () => {
    setVisibilty(false);
  };

  const handleOnPressCategories = (props) => {
    switch (props.name) {
      case "Kids":
        setModalContent(Kids);
        setTitle(props.name);
        setVisibilty(true);
        break;

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: theme.colors.accent }}>
        <Appbar.BackAction
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content color="white" title="Home" />
      </Appbar.Header>
      <ScrollView>
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
              margin: 2,
              width: "99%",
              height: "100%",
              borderRadius: 40,
              position: "absolute",
            }}
            source={require("../../../assets/sixPocketTrouserBlack.jpeg")}
          />
          <Text
            style={{
              fontSize: 40,
              marginTop: "13%",
              marginHorizontal: "5%",
            }}
          >
            Flat
          </Text>
          <Text
            style={{
              fontSize: 30,

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
                <Pressable onPress={() => handleOnPressCategories(val.item)}>
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
                    <Avatar.Image size={90} source={val.item.img} />
                    <Text style={{ margin: 5, fontSize: 20 }}>
                      {val.item.name}
                    </Text>
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
                <Pressable
                  onPress={() => navigation.navigate("Checkout", val.item)}
                >
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
                    <Avatar.Image size={70} source={val.item.img} />
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
                    marginVertical: 25,
                    marginHorizontal: 15,
                  }}
                  onPress={() => {
                    setModalContent(val.item);
                    setSizeChartVisibility(true);
                  }}
                >
                  <Avatar.Image size={60} source={val.item.img} />
                  <Text style={{ margin: 5, fontSize: 18 }}>
                    {val.item.name}
                  </Text>
                </Pressable>
              );
            }}
          />
        </View>
      </ScrollView>
      <SubCatergoriesModal
        isVisible={isVisible}
        onClose={() => setVisibilty(false)}
        title={title}
        content={modalContent}
        onActionPress={handleModalPressable}
      />
      <SizeChartModal
        isVisible={iSSizeChartVisbile}
        onClose={() => setSizeChartVisibility(false)}
        title={"SizeChart"}
        content={modalContent}
        onActionPress={() => setSizeChartVisibility(false)}
      />
    </SafeAreaView>
  );
};

export default Home;

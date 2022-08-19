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
  const [modalContent, setModalContent] = useState("");
  const [title, setTitle] = useState("");
  const [iSSizeChartVisbile, setSizeChartVisibility] = useState(false);

  const handleModalPressable = () => {
    setVisibilty(false);
    navigation.navigate("ProductSelection", modalContent);
  };

  const handleOnPressCategories = (props) => {
    switch (props.name) {
      case "Kids":
        setTitle(props.name);
        break;
      case "New born":
        setTitle("New Born");
        break;
      case "Summer":
        setTitle("Summer");
        break;
      case "Winter":
        setTitle("Winter");
        break;
      default:
        break;
    }
    setModalContent(Kids);

    setVisibilty(true);
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
        <Appbar.Content
          color="white"
          title="Home"
          titleStyle={{ alignSelf: "center" }}
        />
        <Appbar.Action
          icon="cart"
          color="white"
          onPress={() => {
            navigation.navigate("CartScreen");
          }}
        />
        <Appbar.Action
          icon="logout"
          color="white"
          onPress={() => {
            navigation.reset({ index: 0, routes: [{ name: "SignIn" }] });
          }}
        />
      </Appbar.Header>
      <ScrollView>
        {/* <View
          style={styles.avatarView}
        >
          <Avatar.Image
            size={40}
            source={require("../../../assets/emptyUser.jpg")}
          />
          <Text>Hello</Text>
        </View> */}

        <View style={styles.saleImageView}>
          <Image
            style={styles.saleImage}
            source={require("../../../assets/sixPocketTrouserBlack.jpeg")}
          />
          <Text style={styles.saleImageText1}>Flat</Text>
          <Text style={styles.saleImageText2}>20% OFF</Text>
        </View>
        <View style={styles.dividerView}>
          <Text style={styles.textHeading}>Categories</Text>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponentStyle={styles.listHeaderView}
            ListHeaderComponent={() => <View />}
            renderItem={(val) => {
              return (
                <Pressable onPress={() => handleOnPressCategories(val.item)}>
                  <Surface style={styles.listStyles}>
                    <Avatar.Image size={90} source={val.item.img} />
                    <Text style={styles.categoryTextStyle}>
                      {val.item.name}
                    </Text>
                  </Surface>
                </Pressable>
              );
            }}
          />
        </View>
        <View style={styles.dividerView}>
          <Text style={styles.textHeading}>Featured</Text>
          <FlatList
            data={featured}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponentStyle={styles.listHeaderView}
            ListHeaderComponent={() => <View />}
            renderItem={(val) => {
              return (
                <Pressable
                  onPress={() => navigation.navigate("Checkout", val.item)}
                >
                  <Surface style={styles.listStyles}>
                    <Avatar.Image size={70} source={val.item.img} />
                    <Text style={styles.featuredTextStyle}>
                      {val.item.color}
                    </Text>
                    <Text style={{ fontSize: 20 }}>{val.item.name}</Text>
                  </Surface>
                </Pressable>
              );
            }}
          />
        </View>
        <View style={styles.dividerView}>
          <Text style={styles.textHeading}>Size Charts</Text>
          <FlatList
            data={sizeCharts}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponentStyle={styles.listHeaderView}
            ListHeaderComponent={() => <View />}
            renderItem={(val) => {
              return (
                <Pressable
                  style={styles.listStyles2}
                  onPress={() => {
                    setModalContent(val.item);
                    setSizeChartVisibility(true);
                  }}
                >
                  <Avatar.Image size={60} source={val.item.img} />
                  <Text style={styles.chartTextStyle}>{val.item.name}</Text>
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

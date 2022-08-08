import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import styles from "./Styles";
import { Button } from "react-native-paper";

const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/Background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.imageContainer}>Welcome</Text>
        <View>
          <Button mode="outlined" style={styles.button} onPress={() => {}}>
            Sign In
          </Button>
          <Button mode="outlined" style={styles.button} onPress={() => {}}>
            Sign Up
          </Button>
          <Button mode="outlined" style={styles.button} onPress={() => {}}>
            Sign In As guest
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnBoarding;

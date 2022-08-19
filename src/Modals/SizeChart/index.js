import { View, Text, Modal, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { Appbar } from "react-native-paper";
import { theme } from "../../../App.styles";

const SizeChartModal = ({
  isVisible,
  onClose,
  content,
  title,
  onActionPress,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      transparent={true}
      onDismiss={onClose}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>{title}</Text>
          <Image
            source={content?.img}
            style={{ height: "80%", width: "90%" }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SizeChartModal;

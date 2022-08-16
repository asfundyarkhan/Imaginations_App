import { View, Text, Modal, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { Avatar, Surface } from "react-native-paper";

const SubCatergoriesModal = ({
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
          <View style={styles.subView}>
            <Text style={styles.heading}>{title}</Text>
            <FlatList
              data={content}
              keyExtractor={(item) => item.id}
              ListHeaderComponentStyle={{ marginStart: 10 }}
              ListHeaderComponent={() => <View />}
              renderItem={(val) => {
                return (
                  <Pressable onPress={onActionPress}>
                    <Surface style={styles.surfaceStyle}>
                      <Avatar.Image size={80} source={val.item.img} />
                      <Text style={styles.textStyle}>{val.item.name}</Text>
                    </Surface>
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SubCatergoriesModal;

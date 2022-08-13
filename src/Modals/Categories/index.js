import { View, Text, Modal, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { Avatar, Surface } from "react-native-paper";
import { theme } from "../../../App.styles";

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
                    <Surface
                      style={{
                        backgroundColor: theme.colors.accent,
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        alignItems: "center",
                        margin: 5,
                        borderRadius: 20,
                        flexDirection: "row",
                      }}
                    >
                      <Avatar.Image size={80} source={val.item.img} />
                      <Text style={{ margin: 10, fontSize: 20 }}>
                        {val.item.name}
                      </Text>
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

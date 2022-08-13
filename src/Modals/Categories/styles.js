import { StyleSheet } from "react-native";
import { theme } from "../../../App.styles";
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "rgba(196, 196, 196, 0.5)",
  },
  contentContainer: {
    position: "absolute",
    width: "95%",
    bottom: 0,
    alignSelf: "center",
    backgroundColor: theme.colors.primary,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  subView: {
    width: "98%",
    alignItems: "center",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    marginBottom: 6,
    textAlign: "center",
    fontSize: 16,
  },
  heading: {
    marginBottom: 24,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    marginBottom: 30,
    flex: 1,
  },
});

export default styles;

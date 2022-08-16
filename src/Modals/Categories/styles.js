import { StyleSheet } from "react-native";
import { theme } from "../../../App.styles";
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
  },
  contentContainer: {
    position: "absolute",
    width: "98%",
    bottom: 0,
    height: 500,
    alignSelf: "center",
    backgroundColor: "rgba(196, 196, 196, 0.8)",
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

  heading: {
    marginBottom: 24,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  surfaceStyle: {
    backgroundColor: theme.colors.accent,
    paddingVertical: 20,
    paddingHorizontal: 5,
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 20,
    flexDirection: "row",
  },
  textStyle: { margin: 10, fontSize: 20 },
});

export default styles;

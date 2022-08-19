import { StyleSheet } from "react-native";
import { theme } from "../../../App.styles";

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  headerBackground: { backgroundColor: theme.colors.accent },
  mainBodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyScreenText: { fontSize: 30, color: theme.colors.primary },
  imageWithTextContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    margin: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  surfaceStyle: {
    height: 200,
    borderRadius: 25,
    width: 180,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    margin: "2%",
  },
  textStyle: { margin: 10, fontSize: 20, fontWeight: "600" },
  insideSurfaceview: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnStyle: {
    alignItems: "center",
    justifyContent: "flex-end",
    opacity: 0.8,
    position: "absolute",
    backgroundColor: "black",
    marginVertical: 20,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 20,
  },
});

export default styles;

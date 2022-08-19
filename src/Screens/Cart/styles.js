import { StyleSheet } from "react-native";
import { theme } from "../../../App.styles";

const styles = StyleSheet.create({
  heading: {
    margin: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  surfaceStyle: {
    position: "relative",
    backgroundColor: theme.colors.accent,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 20,
  },
  textStyle: { margin: 10, fontSize: 20, fontWeight: "600" },
  insideSurfaceview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    flexDirection: "row",
  },
  btnStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // alignSelf: "flex-end",
    opacity: 0.8,
    position: "absolute",
    backgroundColor: "black",
    backgroundColor: theme.colors.primary,
    width: "auto",
    height: 50,
    marginLeft: "65%",
    marginTop: 600,
    borderRadius: 20,
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    marginTop: 100,
    justifyContent: "center",
    alignContent: "center",
    fontSize: 60,
    marginLeft: 80,
    color: "#BBC0BC",
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    marginTop: 200,
    fontSize: 20,
    margin: 10,
    color: "black",
  },
  button: {
    width: "80%",
    height: 50,
    padding: 5,
    borderWidth: 1,
    marginLeft: "10%",
    marginBottom: 20,
  },
});
export default styles;

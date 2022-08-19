import { StyleSheet } from "react-native";
import { theme } from "../../../App.styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //alignContent: 'center',
  },
  logo: {
    marginTop: 10,
    height: 50,
    width: 200,
    resizeMode: "contain",
  },
  textHeading: {
    fontSize: 20,
    fontWeight: "800",
    paddingHorizontal: 20,
  },
  avatarView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  saleImageView: {
    marginTop: 20,
    height: 180,
  },
  saleImage: {
    margin: 2,
    width: "99%",
    height: "100%",
    borderRadius: 40,
    position: "absolute",
  },
  saleImageText1: {
    fontSize: 40,
    marginTop: "13%",
    marginHorizontal: "5%",
  },
  saleImageText2: {
    fontSize: 30,
    marginLeft: "75%",
  },
  listStyles: {
    backgroundColor: theme.colors.accent,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 20,
  },
  listStyles2: {
    alignItems: "center",
    marginVertical: 25,
    marginHorizontal: 15,
  },
  categoryTextStyle: {
    margin: 5,
    fontSize: 20,
  },
  featuredTextStyle: {
    marginTop: 5,
    marginBottom: 3,
    fontSize: 12,
  },
  chartTextStyle: {
    margin: 5,
    fontSize: 18,
  },

  dividerView: { marginTop: 20 },
  listHeaderView: { marginStart: 10 },
});
export default styles;

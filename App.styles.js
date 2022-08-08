import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  roundness: 20,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6c6c6c",
    accent: "#A0BBD6",
    background: "transparent",
    border: "#6c6c6c",
    //disabled: '#9e9e9e',
    placeholder: "#9e9e9e",
    backdrop: "#212121",
    surface: "white",
    error: "#f44336",
    success: "#4caf50",
    warning: "#ff9800",
    //text: '#212121',
    //textInput: '#212121',
    //textInputBorder: '#212121',
    //textInputBorderFocused: '#00bcd4',
    //textInputPlaceholder: '#212121',
    //textInputPlaceholderFocused: '#00bcd4',
  },
};

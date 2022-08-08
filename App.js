import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import OnBoarding from "./src/Screens/OnBoarding/Index";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./App.styles";
import SignIn from "./src/Screens/SignIn/Index";
import SignUp from "./src/Screens/SignUp/Index";
import ForgotPassword from "./src/Screens/ForgetPassword/Index";
import ResetPassword from "./src/ResetPassword/Index";

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <OnBoarding /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <ForgotPassword /> */}
        <ResetPassword />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;

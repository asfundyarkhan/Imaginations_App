import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import categories from "../dummyData/categories";
import ResetPassword from "../ResetPassword/Index";
import Categories from "../Screens/Categories";
import ForgotPassword from "../Screens/ForgetPassword/Index";
import Home from "../Screens/Home";
import OnBoarding from "../Screens/OnBoarding/Index";
import SignIn from "../Screens/SignIn/Index";
import SignUp from "../Screens/SignUp/Index";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Category"
        component={Categories}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

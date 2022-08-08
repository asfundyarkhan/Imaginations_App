import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import OnBoarding from './src/Screens/OnBoarding/Index';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './App.styles';
import SignIn from './src/Screens/SignIn/Index';
import SignUp from './src/Screens/SignUp/Index';
import ForgotPassword from './src/Screens/ForgetPassword/Index';
import ResetPassword from './src/ResetPassword/Index';
import StackNavigation from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StackNavigation />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

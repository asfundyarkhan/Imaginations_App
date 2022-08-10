import { SafeAreaView } from 'react-native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './App.styles';
import StackNavigation from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import ResetPassword from './src/ResetPassword/Index';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StackNavigation />
          {/* <ResetPassword /> */}
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

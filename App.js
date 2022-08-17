import { SafeAreaView } from "react-native";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./App.styles";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./src/store";
import { Provider } from "react-redux";
import StackNavigation from "./src/Navigation/StackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <SafeAreaView style={{ flex: 1 }}>
            <StackNavigation />
          </SafeAreaView>
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

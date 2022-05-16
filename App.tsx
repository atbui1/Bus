import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import NotificationDetailScreen from './src/screens/NotificationDetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import TabBottomNavigator from './TabBottomNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { myColor } from './src/utils/myColors';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>sdada</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <LoginScreen />
    <SafeAreaProvider style={{backgroundColor: myColor.blue}}>
      <AppNavigator />
    </SafeAreaProvider>
      // <SafeAreaView style={{backgroundColor: myColor.yellow}}>
      //   <AppNavigator />
      // </SafeAreaView>
    // <AppNavigator />
    // <TabBottomNavigator />
    // <NavigationContainer>
        // <TabBottomNavigator />
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

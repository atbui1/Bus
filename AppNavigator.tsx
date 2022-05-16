import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
import MapScreen from "./src/screens/MapScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import { myColor } from "./src/utils/myColors";
import NotificationScreen from "./src/screens/NotificationScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import QRScreen from "./src/screens/QRScreen";
import NotificationDetailScreen from "./src/screens/NotificationDetailScreen";
import MyTabBottom from "./TabBottomNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Dimensions } from "react-native";
import ic_bus from "./assets/icons/ic_bus.png";
import ic_ar from "./assets/ic_arrow_left.png";
import ic_qr from "./assets/ic_qr.png";
import abScreen from "./src/screens/ab";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="LoginPage"
                component={LoginScreen}
                initialParams={{
                    idQR: 1111
                }}
                options={{
                    headerShown: false,
                }}
                />
                <Stack.Screen
                name="MyTabs"
                component={MyTabBottom}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="MapPage"
                component={MapScreen}
                options={{
                    headerShown: false,
                }}
                />
                {/* <Stack.Screen
                name="abPage"
                component={abScreen}
                options={{
                    headerShown: false,
                }}
                /> */}
                {/* <Stack.Screen
                            name='HistoryPage'
                            component={HistoryScreen}
                            options={{
                                title: 'Lịch sử giao dịch',
                                headerStyle: {
                                backgroundColor: myColor.green,
                            },
                                headerTintColor: myColor.white,
                                headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            }}
                        /> */}
                {/* <Stack.Screen
                            name='NotificationPage'
                            component={NotificationScreen}
                            options={{
                                title: '',
                                headerStyle: {
                                backgroundColor: myColor.green,
                            },
                                headerTintColor: myColor.white,
                                headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            }}
                        /> */}
                {/* <Stack.Screen
                            name='ProfilePage'
                            component={ProfileScreen}
                        /> */}
                <Stack.Screen name="RegisterPage" component={RegisterScreen} 
                options={{
                    title: '',
                    headerTintColor: myColor.white,
                    headerStyle: {
                        backgroundColor: myColor.green,
                    },
                    headerRight: () => (
                        <View style={{
                            // backgroundColor: '#FF0000', 
                            right: Dimensions.get("window").width/8-2,
                            // marginRight: Dimensions.get("window").width/2-80,
                        justifyContent: 'center', alignSelf: 'center',
                        }}>
                            <Image source={ic_bus}
                            style={{width: 40, height: 40, tintColor: myColor.white}} />
                        </View>
                    )
                    
                }} />
                <Stack.Screen name="QRPage" component={QRScreen} 
                options={{
                    title: '',
                    headerTintColor: myColor.white,
                    headerStyle: {
                        backgroundColor: myColor.green,
                    },
                    headerRight: () => (
                        <View style={{
                            // backgroundColor: '#FF0000', 
                            right: Dimensions.get("window").width/8-2,
                            // marginRight: Dimensions.get("window").width/2-80,
                        justifyContent: 'center', alignSelf: 'center',
                        }}>
                            <Image source={ic_bus}
                            style={{width: 40, height: 40, tintColor: myColor.white}} />
                        </View>
                    )
                    
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="LoginPage" component={LoginScreen} options={{headerShown: false}}/>
    //     <Stack.Screen name='NotificationPage' component={MyTabBottom} />
    //     <Stack.Screen name='NotificationDetailPage' component={NotificationDetailScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

function MyTabAAA() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="MapPage" component={MapScreen} />
        <Tab.Screen name="HistoryPage" component={HistoryScreen} />
        <Tab.Screen name="ProfilePage" component={ProfileScreen} />
        <Tab.Screen name="NotificationPage" component={NotificationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
// export default MyTabAAA;

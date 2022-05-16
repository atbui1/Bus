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
import NotificationDetailScreen from "./src/screens/NotificationDetailScreen";
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import ic_map from './assets/icons/ic_map.png';
import ic_history from './assets/icons/ic_history.png';
import ic_user from './assets/icons/ic_user.png';
import ic_notify from './assets/icons/ic_notify.png';
import { SafeAreaView } from "react-native";

const Tab = createBottomTabNavigator();

const MyTabBottom = () => {
    return (
    //   <NavigationContainer>
    // <SafeAreaView>
        <Tab.Navigator 
            // bottom tab bar navigation
            screenOptions={{
                // headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: myColor.black1,
                    height: 50,
                }
            }}
        >
            {/* header tab bar map screen */}
            <Tab.Screen name="MapPage" component={MapScreen} 
                options={{
                    // headerShown:false,
                    header: () => (
                        // <Image source={ic_history} style={{width:30,  height: 30, tintColor: 'red'}} />
                        <View style={styles.container}>
                            <View style={styles.container1}>
                                <Text>
                                    <Image source={ic_history} style={{width:30,  height: 30, tintColor: 'red'}} />
                                </Text>
                            </View>
                            <View style={styles.container2}>
                                <Text>
                                    <Image source={ic_history} style={{width:30,  height: 30, tintColor: 'red'}} />
                                </Text>
                            </View>
                            <View style={styles.container1}>
                                <Text>
                                    <Image source={ic_history} style={{width:30,  height: 30, tintColor: 'red'}} />
                                </Text>
                            </View>
                        </View>
                    ),
                    headerShown: false,
                    // headerStyle: {backgroundColor: myColor.green},
                    headerTitle:  () => (
                        <Image source={ic_user} style={{tintColor: 'red'}} />
                      ),
                    // headerTitleContainerStyle:{backgroundColor: 'red', alignSelf: 'center', justifyContent: 'center'},
                    headerLeft: () => (
                        <Text 
                            style={{backgroundColor: 'red'}}
                            onPress={() => alert('This is a left!')}>
                            <Image source={ic_user} style={{alignSelf: 'center'}}/>
                        </Text>
                      ),
        
                    headerRight: () => (
                        <Text 
                            style={{justifyContent: 'center', backgroundColor: 'red'}}
                            onPress={() => alert('This is a RIGHT!')}>
                            <Image source={ic_user} style={{alignSelf: 'center'}}/>
                        </Text>
                      ),
                    // tabBarLabel: 'BẢN ĐỒ',
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center',
                        width:50, height:50}}>
                            <Image source={ic_map} style={{width:25, height:25, tintColor: focused ? myColor.green:myColor.black3,}} />
                            <Text style={{color: focused ? myColor.green:myColor.black3,}}>
                            BẢN ĐỒ
                            </Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="HistoryPage" component={HistoryScreen} 
                options={{
                    // headerShown:false,
                    headerStyle: {backgroundColor: myColor.green},
                    headerTitle: 'Lịch Sử Giao Dịch',
                    headerTitleStyle: {color: myColor.white},
                    tabBarLabel: 'LỊCH SỬ GD',
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center',}}>
                            <Image source={ic_history} style={{width:25, height:25, tintColor: focused ? myColor.green:myColor.black3,}} />
                            <Text style={{color: focused ? myColor.green:myColor.black3,}}>
                            LỊCH SỬ GD
                            </Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="ProfilePage" component={ProfileScreen} 
                options={{
                    headerShown:false,
                    tabBarLabel: 'CÁ NHÂN',
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={ic_user} style={{width:25, height:25, tintColor: focused ? myColor.green:myColor.black3,}} />
                            <Text style={{color: focused ? myColor.green:myColor.black3,}}>
                            CÁ NHÂN
                            </Text>
                        </View>
                    ),
                    
                }} />
            <Tab.Screen name="NotificationPage" component={NotificationScreen} 
                options={{
                    // headerShown:false,
                    headerStyle: {backgroundColor: myColor.green},
                    headerTitle: 'Thông Báo',
                    headerTitleStyle: {color: myColor.white},
                    tabBarLabel:'THÔNG BÁO',
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={ic_notify} style={{width:25, height:25, tintColor: focused ? myColor.green:myColor.black3,}} />
                            <Text style={{color: focused ? myColor.green:myColor.black3,}}>
                            THÔNG BÁO
                            </Text>
                        </View>
                    ),
                    tabBarBadge: 3,
                }} />
        </Tab.Navigator>
    // </SafeAreaView>
    //   </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
      wrapper: {
            backgroundColor: 'red',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center'
      },
      img_icon: {
        
      },
      container: {
          display: 'flex',
          height: 50,
          backgroundColor: myColor.black3,
        //   marginTop: 50,
          flexDirection: 'row'
      },
      container1: {
          flex: 1,
          width:50,
        height: 50,
        backgroundColor: myColor.blue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        flex:4,
        width:50,
      height: 50,
      backgroundColor: myColor.yellow,
      justifyContent: 'center',
      alignItems: 'center'
  },
  })

export default MyTabBottom;

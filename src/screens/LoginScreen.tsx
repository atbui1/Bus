import * as React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
// import {Image} from 'react-native-elements/dist/image/Image'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';

import { myColor } from '../utils/myColors';
import { mySizes } from '../utils/mySizes';

import ic_bus from '../../assets/icons/ic_bus.png';
import ic_qr from '../../assets/icons/ic_qr.png';
import ic_arrow_left from '../../assets/icons/ic_arrow_left.png';

// function LoginScreen({navigation}: {navigation:any}) {
function LoginScreen({navigation, route}: {navigation:any, route: any}) {
    let valueQR;
    if(route.params.idQR == 1111) {
        valueQR = ''
    } else {
        valueQR = route.params.idQR;
    }
    return(
        <View style={styles.page}>
            <View style={styles.logoImg}>
                <Image source={ic_bus} style={{width: 100, height: 100}}/>
            </View>
  
            <Text style={styles.title}>Smart bus</Text>
            {/* <Text>ss</Text>
            <Text>abc + {route.params.idQR}</Text>
            <Text>{valueQR}</Text>
            <Text>ss</Text> */}
            <Input 
                placeholder='Mã Khách hàng'
                value= {valueQR}
                rightIcon={
                <TouchableOpacity
                    onPress={() => navigation.navigate('QRPage')} 
                >
                    <Image source={ic_qr} />
                </TouchableOpacity>
                }/>
            <Button
                title="Đăng Nhập"
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: myColor.green,
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 10,
                }}
                containerStyle={{
                  marginVertical: 10,
                }}
                // onPress={() => navigation.navigate('HistoryPage')}
                onPress={() => navigation.navigate('MyTabs')}
              />
           <Text style={styles.account}>Không có tài khoản?
               <Text 
                    style={styles.register}
                    onPress={() => navigation.navigate('RegisterPage')}
               >  Đăng ký</Text>
           </Text>
           <View style={styles.wrapperMap}>
           <Text 
                style={styles.showMap}
                onPress={() => navigation.navigate('MapPage')}
            >Xem bản đồ
                <Image source={ic_arrow_left} style={{width:20, height:20, backgroundColor: myColor.red}}/>
                
           </Text>
           </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        marginHorizontal: 16,
        marginTop: mySizes.px100,
    },
    logoImg: {
        height: 100,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    account: {
        fontSize: mySizes.px15,
        alignSelf: 'flex-end',
        marginTop: mySizes.px10
    },
    register:{
        fontSize: mySizes.px20,
        fontWeight:'bold',
        color: myColor.blue,
    },
    wrapperMap:{
        alignSelf: 'center'
    },
    showMap: {
        fontSize: mySizes.px20,
        fontWeight: 'bold',
        marginTop: mySizes.px20
    },
  });

 export default LoginScreen;
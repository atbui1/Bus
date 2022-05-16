import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { myColor } from "../utils/myColors";
import { mySizes } from "../utils/mySizes";
import ic_mail from '../../assets/icons/ic_mail.png'

function NotificationItem({listNotification}:{listNotification:any}) {
    return(
        <TouchableOpacity>
            <View style={styles.wrapper}>
                <View style={styles.left}>
                    <Image source={ic_mail} style={styles.left_image}/>
                </View>
                <View style={styles.right}>
                    <View style={styles.right_title}>
                        <Text style={styles.title}>{listNotification.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.sub_trans}>{listNotification.address}</Text>
                    </View>
                    <View>
                        <Text style={styles.sub_trans}>{listNotification.timeTrans}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        height: 100,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginHorizontal: mySizes.px10,
        borderBottomWidth: 1,
        borderColor: myColor.black3,
        // marginBottom: mySizes.px10,
        // shadowColor: "#000",
        // shadowOffset: {
	    //     width: 0,
	    //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    }, 
    left: {
        width: 100,
        justifyContent: 'center',
    },
    left_image: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    },
    right: {
        flex:1,
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    right_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 20
    },
    title:{
        fontSize: mySizes.px20,
        color: myColor.black,
        fontWeight: 'bold'
    },
    sub_trans: {
        fontSize: mySizes.px15,
        color: myColor.black,
        paddingTop: 5
    }
})

export default NotificationItem;
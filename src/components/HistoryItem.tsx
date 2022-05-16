import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { myColor } from "../utils/myColors";
import { mySizes } from "../utils/mySizes";
import ic_trending_up from '../../assets/icons/ic_trending_up.png'

function HistoryItem({historyListItem}:{historyListItem:any}) {
    return(
        <TouchableOpacity>
            <View style={styles.wrapper}>
                <View style={styles.left}>
                    <Image source={ic_trending_up} style={styles.left_image}/>
                </View>
                <View style={styles.right}>
                    <View style={styles.right_title}>
                        <Text style={styles.title}>{historyListItem.title}</Text>
                        <View style={{alignSelf: 'flex-end'}}>
                            <Text style={styles.money}>{historyListItem.money}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sub_trans}>{historyListItem.idTrans}</Text>
                    </View>
                    <View>
                        <Text style={styles.sub_trans}>{historyListItem.timeTrans}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        borderColor: myColor.red,
        borderRadius: mySizes.px10,
        height: 100,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: mySizes.px10,
        marginHorizontal: mySizes.px10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

elevation: 5,
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
    money:{
        fontSize: mySizes.px20,
        color: myColor.red,
        fontWeight: '700'
    },
    sub_trans: {
        fontSize: mySizes.px15,
        color: myColor.black3,
        paddingTop: 5
    }
})

export default HistoryItem;
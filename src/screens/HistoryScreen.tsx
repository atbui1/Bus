import * as React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import HistoryItem from '../components/HistoryItem';
import { myColor } from '../utils/myColors';
// import { FlatList } from 'react-native-gesture-handler/lib/typescript/components/GestureComponents';

const DATA_HISTORY = [
    {
        id:1,
        image: 'sssssssssssss',
        title: 'quet the',
        money: '+123456',
        idTrans: 'ID abc 123',
        timeTrans: '11-22-33-44'
    },
    {
        id:2,
        image: 'sssssssssssss',
        title: 'quet the',
        money: '+123456',
        idTrans: 'ID abc 123',
        timeTrans: '1111-2222'
    },
    {
        id:3,
        image: 'sssssssssssss',
        title: 'quet the',
        money: '+123456',
        idTrans: 'ID abc 123',
        timeTrans: '4560-0258'
    },
    {
        id:4,
        image: 'sssssssssssss',
        title: 'quet the',
        money: '+123456',
        idTrans: 'ID abc 123',
        timeTrans: '159-753'
    },
    {
        id:5,
        image: 'sssssssssssss',
        title: 'quet the',
        money: '+123456',
        idTrans: 'ID abc 123',
        timeTrans: '1234-56789'
    },
    {
        id:6,
        image: 'sssssssssssss',
        title: 'quet the',
        money: '+123456',
        idTrans: 'ID abc 123',
        timeTrans: '2587-2589'
    },
    {
        id:7,
        image: 'sssssssssssss',
        title: 'quet the',
        money: '-456456',
        idTrans: 'ID abc 123',
        timeTrans: '2020-2020'
    },
    {
        id:8,
        image: 'sssssssssssss',
        title: 'quet the',
        money: '+789789',
        idTrans: 'ID 888',
        timeTrans: '11-22-33-44'
    },
];

function HistoryScreen() {
    return(
            <View style={styles.page}>
                <FlatList 
             data={DATA_HISTORY}
             renderItem={({item}) =><HistoryItem historyListItem={item}/>}
            />
            </View>
    );
}

const styles = StyleSheet.create({
    page: {
      height: Dimensions.get("window").height - 130,
    //   backgroundColor: myColor.red,
    },
  })

export default HistoryScreen;
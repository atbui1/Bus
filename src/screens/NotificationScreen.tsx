import * as React from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import NotificationItem from "../components/NotificationItem";
import { myColor } from "../utils/myColors";

const DATA_NOTIFICATION = [
  {
    id: 1,
    image: "sssssssssss",
    title: "thong bao",
    address: "GO VAP - BINH THANH",
    timeTrans: "1 thang truoc",
  },
  {
    id: 2,
    image: "sssssssssss",
    title: "thong bao abc",
    address: "HA NOI - HCM",
    timeTrans: "1 nam truoc",
  },
  {
    id: 3,
    image: "sssssssssss",
    title: "thong bao",
    address: "TT.HUE - NGHE AN",
    timeTrans: "1 tuan truoc",
  },
  {
    id: 4,
    image: "sssssssssss",
    title: "thong bao",
    address: "GO VAP - BINH THANH",
    timeTrans: "1 thang truoc",
  },
  {
    id: 5,
    image: "sssssssssss",
    title: "thong bao",
    address: "GO VAP - BINH THANH",
    timeTrans: "1 thang truoc",
  },
  {
    id: 6,
    image: "sssssssssss",
    title: "thong bao",
    address: "GO VAP - BINH THANH",
    timeTrans: "1 thang truoc",
  },
  {
    id: 7,
    image: "sssssssssss",
    title: "thong bao k",
    address: "GO VAP - BINH THANH",
    timeTrans: "1 thang truoc",
  },
  {
    id: 8,
    image: "sssssssssss",
    title: "thong bao z",
    address: "GO VAP - BINH THANH",
    timeTrans: "1 thang truoc",
  },
];

function NotificationScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.page}>
      <FlatList
        data={DATA_NOTIFICATION}
        renderItem={({ item }) => <NotificationItem listNotification={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    height: Dimensions.get("window").height - 120,
    // backgroundColor: myColor.red,
  },
})

export default NotificationScreen;

import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { myColor } from "../utils/myColors";
import ic_calendar from "../../assets/icons/ic_calendar.png";
import ic_account from "../../assets/icons/ic_account.png";
import ic_address from "../../assets/icons/ic_address.png";
import ic_balance from "../../assets/icons/ic_balance.png";
import ic_gender from "../../assets/icons/ic_gender.png";
import ic_phone from "../../assets/icons/ic_phone.png";
import ic_birthday from "../../assets/icons/ic_birthday.png";
import img_avatar_1 from '../../assets/images/img_avatar_1.jpg';
import img_avatar_2 from '../../assets/images/img_avatar_2.jpg';
import { ScrollView } from "react-native-gesture-handler";
import { mySizes } from "../utils/mySizes";

function ProfileScreen() {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.wrapper_user}>
            <View style={styles.wrapper_avatar}>
                <Image source={img_avatar_2} style={styles.avatar}/>
            </View>
            <Text style={styles.user_name}>An Di Hien</Text>
            <Text style={styles.user_id}>MBS8115614510 - the 15%</Text>
        </View>
        <View style={styles.wrapper_item}>
          <View style={styles.wrapper_image}>
            <Image source={ic_balance} style={styles.item_image} />
          </View>
          <View style={styles.title}>
            <Text style={styles.title_content}>Số dư còn lại 67.000 VNĐ</Text>
          </View>
        </View>
        <View style={styles.wrapper_item}>
          <View style={styles.wrapper_image}>
            <Image source={ic_calendar} style={styles.item_image} />
          </View>
          <View style={styles.title}>
            <Text style={styles.title_content}>Sử dụng tới 31-12-2022</Text>
          </View>
        </View>
        <View style={styles.wrapper_item}>
          <View style={styles.wrapper_image}>
            <Image source={ic_account} style={styles.item_image} />
          </View>
          <View style={styles.title}>
            <Text style={styles.title_content}>2122334455</Text>
          </View>
        </View>
        <View style={styles.wrapper_item}>
          <View style={styles.wrapper_image}>
            <Image source={ic_address} style={styles.item_image} />
          </View>
          <View style={styles.title}>
            <Text style={styles.title_content}>
              Quang trung - go vap - tp.Ho Chi Minh
            </Text>
          </View>
        </View>
        <View style={styles.wrapper_item}>
          <View style={styles.wrapper_image}>
            <Image source={ic_phone} style={styles.item_image} />
          </View>
          <View style={styles.title}>
            <Text style={styles.title_content}>0123456789</Text>
          </View>
        </View>
        <View style={styles.wrapper_item}>
          <View style={styles.wrapper_image}>
            <Image source={ic_birthday} style={styles.item_image} />
          </View>
          <View style={styles.title}>
            <Text style={styles.title_content}>25-11-1999</Text>
          </View>
        </View>
        <View style={styles.wrapper_item}>
          <View style={styles.wrapper_image}>
            <Image source={ic_gender} style={styles.item_image} />
          </View>
          <View style={styles.title}>
            <Text style={styles.title_content}>Nữ</Text>
          </View>
        </View>
        {/* <View style={styles.logout}>
                <Text>Đăng Xuất</Text>
            </View> */}
        <Text style={styles.logout}>Đăng Xuất</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    paddingTop: 20
  },
  wrapper_user: {
    height: mySizes.px170,
    backgroundColor: myColor.green,
  },
  wrapper_avatar:{
    height: mySizes.px100,
    justifyContent: 'center',
  },
  avatar: {
      width: mySizes.px80,
      height: mySizes.px80,
      borderRadius: mySizes.px40,
      alignSelf: 'center',
  },
  user_name: {
      fontSize: mySizes.px25,
      color: myColor.white,
      fontWeight: 'bold',
      alignSelf: 'center',
  },
  user_id: {
    fontSize: mySizes.px20,
    color: myColor.black,
    alignSelf: 'center',
  },
  wrapper_item: {
    height: mySizes.px50,
    borderColor: myColor.black3,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  wrapper_image: {
    width: mySizes.px60,
    justifyContent: "center",
  },
  title: {
    flex: 1,
  },
  item_image: {
    height: mySizes.px30,
    width: mySizes.px30,
    alignSelf: "center",
  },
  title_content: {
    lineHeight: mySizes.px50,
    paddingLeft: mySizes.px10,
    fontSize: mySizes.px15,
  },
  logout: {
    marginTop: mySizes.px50,
    marginBottom: mySizes.px50,
    alignSelf: "center",
    paddingHorizontal: mySizes.px50,
    paddingVertical: mySizes.px5,
    fontSize: mySizes.px25,
    fontWeight: "bold",
    color: myColor.red,
  },
});
export default ProfileScreen;

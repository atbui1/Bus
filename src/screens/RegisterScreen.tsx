import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Input } from "react-native-elements/dist/input/Input";
import { mySizes } from "../utils/mySizes";

import img_avatar_2 from "../../assets/images/img_avatar_2.jpg";
import ic_account from "../../assets/icons/ic_account.png";
import ic_address from "../../assets/icons/ic_address.png";
import ic_phone from "../../assets/icons/ic_phone.png";
import ic_location from "../../assets/icons/ic_location.png";
import ic_mail from "../../assets/icons/ic_mail.png";
import ic_male from "../../assets/icons/ic_male.png";
import ic_female from "../../assets/icons/ic_female.png";
import ic_back from "../../assets/icons/ic_back.png";
import ic_bus from "../../assets/icons/ic_bus.png";
import {
  gestureHandlerRootHOC,
  ScrollView,
} from "react-native-gesture-handler";
import { myColor } from "../utils/myColors";
import { SafeAreaView } from "react-native-safe-area-context";

function RegisterScreen() {
  return (
    // <SafeAreaView style={{ backgroundColor: myColor.black3 }}>
    //   <View style={styles.header_wrapper}>
    //     <View style={styles.header_left}>
    //       <Text style={styles.header_text} onPress={() =>  {}}>
    //         <Image source={ic_back} style={styles.header_icon} />
    //       </Text>
    //     </View>
    //     <View style={styles.header_center}>
    //       <Image source={ic_bus} style={styles.header_icon} />
    //     </View>
    //   </View>
      <ScrollView>
        <View style={styles.page}>
          <View style={styles.wrapper_avatar}>
            {/* <Image source={img_avatar_2} style={styles.circle_avatar} /> */}
            <View style={styles.circle_avatar}></View>
          </View>
          <View>
            <Input
              placeholder="Họ tên...(bắt buộc)"
              leftIcon={<Image source={ic_account} />}
            />
          </View>
          <View>
            <Input
              placeholder="CMND/Căn cước...(bắt buộc)"
              leftIcon={<Image source={ic_address} />}
            />
          </View>
          <View>
            <Input
              placeholder="Điện thoại...(bắt buộc)"
              leftIcon={<Image source={ic_phone} />}
            />
          </View>
          <View>
            <Input
              placeholder="Địa chỉ...(bắt buộc)"
              leftIcon={<Image source={ic_location} />}
            />
          </View>
          <View>
            <Input
              placeholder="Email..."
              leftIcon={<Image source={ic_mail} />}
            />
          </View>
          <View style={styles.wrapper_option}>
            <View style={styles.option}>
              <Text style={styles.option_name}>
                <Image source={ic_male} style={styles.icons} />
                Nam
              </Text>
            </View>
            <View style={styles.option}>
              <Text style={styles.option_name}>
                <Image source={ic_female} style={styles.icons} />
                Nữ
              </Text>
            </View>
          </View>
          <View style={styles.wrapper_option}>
            <View style={styles.option}>
              <Text style={styles.option_name}>Chọn ngày sinh</Text>
            </View>
            <View style={styles.option}>
              <Text style={styles.option_name}>Chọn công ty</Text>
            </View>
          </View>
          <View>
            <Button
              title="Đăng Ký Tạo Thẻ"
              titleStyle={{ fontWeight: "700", fontSize: 20 }}
              buttonStyle={{
                backgroundColor: myColor.green,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 10,
                height: 50,
              }}
              containerStyle={{
                marginVertical: 10,
              }}
              // onPress={() => navigation.navigate('HistoryPage')}
            />
          </View>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    padding: 16,
    backgroundColor: myColor.black1,
  },
  header_wrapper: {
    display: "flex",
    height: 50,
    flexDirection: 'row',
  },
  header_left: {
    backgroundColor: myColor.green,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header_center: {
    backgroundColor: myColor.blue,
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_text: {
    width: 40,
    height: 40,
    backgroundColor: myColor.white,
    lineHeight: 40,
  },
  header_icon: {
    width: 20,
    height: 20,
    tintColor: myColor.red,
    alignSelf: 'center'
  },
  wrapper_avatar: {
    height: mySizes.px100,
    justifyContent: "center",
  },
  circle_avatar: {
    width: mySizes.px80,
    height: mySizes.px80,
    borderRadius: 80,
    alignSelf: "center",
    backgroundColor: myColor.white,
  },
  wrapper_option: {
    marginBottom: mySizes.px10,
    flexDirection: "row",
    height: mySizes.px50,
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  option: {
    backgroundColor: myColor.white,
    width: 150,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: myColor.black,
  },
  option_name: {
    alignSelf: "center",
    fontSize: mySizes.px20,
    fontWeight: "bold",
    color: myColor.black,
  },
  icons: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
});

export default RegisterScreen;

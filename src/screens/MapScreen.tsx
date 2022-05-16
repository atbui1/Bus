import * as React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Platform,
  ToastAndroid,
} from "react-native";
import { FAB } from "react-native-elements";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { myColor } from "../utils/myColors";

import ic_near_me from "../../assets/icons/ic_near_me.png";
import ic_bus from "../../assets/icons/ic_bus.png";
import ic_auto from "../../assets/icons/ic_autorenew.png";
import ic_next from "../../assets/icons/ic_next.png";
import { mySizes } from "../utils/mySizes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

//aaaaasssssssss
// function MapScreen() {
const MapScreen: React.FC = () => {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let latitudeDefault = 10.8535577;
  let longitudeDefault = 106.6284721;
  let latitudeCurrent = latitudeDefault;
  let longitudeCurrent = longitudeDefault;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      // alert(location.coords.longitude + ' : ' + location.coords.latitude);

      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    longitudeCurrent = location.coords.longitude;
    latitudeCurrent = location.coords.latitude;
  }
  let regionLocation = {
    latitude: latitudeCurrent,
    longitude: longitudeCurrent,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  const _moveLocationCurrent = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    // alert(location.coords.longitude + ' : ' + location.coords.latitude);

    setLocation(location);
  };
  let bb = () => {
    alert("bbbbb");
  };
  return (
    <SafeAreaView style={styles.safe_page}>
      <View>
        <View style={styles.header_wrapper}>
          <View style={styles.header_left}>
            <Text
              style={styles.header_text}
              onPress={() => {
                alert("left icon");
              }}
            >
              <Image source={ic_auto} style={styles.header_icon} />
            </Text>
          </View>
          <View style={styles.header_center}>
            <Image source={ic_bus} style={styles.header_icon} />
          </View>
          <View style={styles.header_left}>
            <Text
              style={styles.header_text}
              onPress={() => {
                alert("right icon");
              }}
            >
              <Image source={ic_next} style={styles.header_icon} />
            </Text>
          </View>
        </View>
        <View>
          {/* {location ? <Text>latitude = {location.coords.latitude}</Text> : null} */}
          {/* {location ? <Text>longitude = {location.coords.longitude}</Text> : null} */}
          {/* {location ? <Text>latitude = {latitudeCurrent}</Text> : latitudeDefault} */}
          {/* {location ? <Text>longitude = {longitudeCurrent}</Text> : longitudeDefault} */}
        </View>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          // region={{
          //   latitude: latitudeCurrent,
          //   longitude: longitudeCurrent,
          //   latitudeDelta: 0.015,
          //   longitudeDelta: 0.0121,
          // }}
          region={regionLocation}
          provider="google"
          // onRegionChangeComplete={onchangeLocation}
          // showsUserLocation={true}
          // showsMyLocationButton = {true}
        >
          <Marker
            coordinate={{
              latitude: latitudeCurrent,
              longitude: longitudeCurrent,
            }}
            pinColor="#001122"
          >
            <Callout>
              <Text>I'm here</Text>
            </Callout>
          </Marker>
          <Circle
            center={{
              latitude: latitudeCurrent,
              longitude: longitudeCurrent,
            }}
            radius={50}
          />
        </MapView>
        <View style={styles.fab_wrapper}>
          <Text
            style={styles.fab_text}
            onPress={() => {
              // alert(location.coords.longitude + ' : ' location.coords.latitude);
              // alert(latitudeCurrent + " : " + longitudeCurrent);
              // onchangeLocation
              // ToastAndroid.show('sssssssssssssss', ToastAndroid.SHORT)
              _moveLocationCurrent();
            }}
          >
            <Image source={ic_near_me} style={styles.fab_img} />
            {/* <Text style={styles.fab_img}> aSB xx</Text> */}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_page: {
    backgroundColor: myColor.black3,
  },
  header_wrapper: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    backgroundColor: myColor.green,
  },
  header_left: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center',
    // backgroundColor: myColor.yellow
  },
  header_center: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  header_text: {
    // backgroundColor: myColor.red,
    height: 50,
    alignSelf: "center",
  },
  header_icon: {
    width: 30,
    height: 30,
    tintColor: myColor.white,
  },
  fab_wrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: myColor.red,
    position: "absolute",
    bottom: 170,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  fab_text: {
    backgroundColor: myColor.green,
    width: 60,
    height: 60,
    lineHeight: 40,
    borderRadius: 40,
    paddingLeft: 15,
    // justifyContent: 'center',
  },
  fab_img: {
    width: 30,
    height: 30,
    // lineHeight: 100,

    backgroundColor: myColor.yellow,
    // alignSelf: 'center'
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  fab_location: {
    position: "absolute",
    alignItems: "center",
    bottom: 200,
    right: 20,
    backgroundColor: myColor.red,
  },
});
export default MapScreen;

import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner'
import { useEffect, useState } from 'react';

function QRScreen({navigation}:{navigation:any}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('khong the scan qr');
    

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    //   const handleBarCodeScanned = ({ type, data }) => {
    //     setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    //   };
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
            navigation.navigate('LoginPage', 
              {idQR: data}
            )
      };

      if (hasPermission === null) {
        return <Text>Requesting for camera permission, chua co quyen</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera, kg cap quyen</Text>;
      }

    return(
        <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50,
    }
})

 export default QRScreen;
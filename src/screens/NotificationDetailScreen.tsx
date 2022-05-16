import * as React from 'react'
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { myColor } from '../utils/myColors';
import LoginScreen from './LoginScreen';

function NotificationDetailScreen() {
    return(
        <View>
            <Text>
            NotificationDetailScreen page
            </Text>
            <Button
                title={'abc button'}
                buttonStyle={{
                    backgroundColor: myColor.black3
                }}
                // onPress={() => navigation.navigate('NotificationPage')} 
                // onPress={() => navigation.navigate(LoginScreen)} 
                />
        </View>
    );
}
 export default NotificationDetailScreen;
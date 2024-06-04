
import {StyleSheet, View, Text, Button, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import React, {useState} from 'react';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Add other styles as needed
});

const Buttoncomponent = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Get Location" onPress={requestLocationPermission}/>
      </View>
      <Text>Latitude: </Text>
      <Text>Longitude: </Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Send Location" />
      </View>
    </View>
  );
}
  // state to hold location
  const [location, setLocation] = useState(false);

// Function to get permission for location
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

  /* function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };
  */

export {Buttoncomponent, requestLocationPermission};

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
        <Button title="Get Location" />
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

export default Buttoncomponent;
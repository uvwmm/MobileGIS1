/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Text, View} from 'react-native';
import {Buttoncomponent, requestLocationPermission} from './components/Button';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';


const HelloWorldApp = () => {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
      <Buttoncomponent />
    </View>
    

  );
};



export default HelloWorldApp;

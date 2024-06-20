
import {StyleSheet, View, Text, Button, PermissionsAndroid} from 'react-native';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import React, {useState} from 'react';


//import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


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
        <Button title="Get Location" onPress={getLocation}/>
      </View>
      <Text>Latitude: </Text>
      <Text>Longitude: </Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Send Location" />
      </View>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Testbutton" onPress={requestLocationPermission}/>
      </View>
    </View>
  );
}
 

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

  /*  
  // function to check permissions and get Location
const getLocation = () => {
      // state to hold location
 // const [location, setLocation] = useState(false);
  const result = requestLocationPermission();
    
    result.then(res => {
      console.log('res is:', res);
      
      if (res) {
        console.log('Getting location');
       
        Geolocation.getCurrentPosition(
        
          position => {
            console.log(position);
            setLocation(position);

            console.log('Latitude: ', position.coords.latitude);
            console.log('Longitude: ', position.coords.longitude);  
            console.log(setLocation)
          },
          error => {
            console.log(error.code, error.message);
            setLocation(null);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
        
       //Geolocation.getCurrentPosition(info => console.log(info));

       console.log('reached that Point')
      }
      console.log('reached that Point1')
    })
    console.log('reached that Point2')
    console.log('location is:', location);
  };
*/  
//write a method that can get the coordinates out of the Geolocation API and return them to the caller and store them in a state variable




/*
//Function to get location
 const getLocation = () => {
   Geolocation.getCurrentPosition(
     position => {
       console.log(position);
       console.log('Latitude: ', position.coords.latitude);
       console.log('Longitude: ', position.coords.longitude);
       handleCoordinates(latitude, longitude);
      },
        error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};
*/
// Function to send location	
// const sendLocation = () => {
//   // Code to send location
// };


const getLocation = () => {
  Geolocation.getCurrentPosition(
    position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log('Latitude: ', latitude);
      console.log('Longitude: ', longitude);

      // Sie können die Variablen hier weiter verwenden oder speichern
      // Beispiel: Weitergabe an eine andere Funktion
      handleCoordinates(latitude, longitude);
    },
    error => {
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};


// Declare state variables for latitude and longitude
const [latitude, setLatitude] = useState<number | null>(null);
const [longitude, setLongitude] = useState<number | null>(null);

const handleCoordinates = (lat: number, lon: number) => {
  // Update state variables
  setLatitude(lat);
  setLongitude(lon);

  // Log the new values
  console.log('Stored Latitude: ', latitude);
  console.log('Stored Longitude: ', longitude);
};


export {Buttoncomponent, requestLocationPermission, getLocation};

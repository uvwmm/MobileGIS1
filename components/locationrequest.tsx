import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const LocationComponent = () => {
  // Declare state variables for latitude and longitude
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log('Latitude: ', latitude);
        console.log('Longitude: ', longitude);

        // Update state variables
        setLatitude(latitude);
        setLongitude(longitude);

        // Log the new values
        console.log('Stored Latitude: ', latitude);
        console.log('Stored Longitude: ', longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <View style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Get Location" onPress={getLocation} />
      </View>
      <Text>Latitude: {latitude !== null ? latitude : 'Loading...'}</Text>
      <Text>Longitude: {longitude !== null ? longitude : 'Loading...'}</Text>
      <View style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Send Location" />
      </View>
      <View style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Testbutton" onPress={() => {/* implement requestLocationPermission function here */}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LocationComponent;

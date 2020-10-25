import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: {
      latitude: 100,
      longitude: 100,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001
    }
    };
  }
  render() {
    return (
      <View>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyCzOM3Fhp_b5O4uOFaEqsYAfTGeRJAj_q4',
              language: 'en',
            }}
          />
        </View>
        <View>
          <MapView
              style={styles.mapStyle}
              initialRegion={this.state.region}
              showsUserLocation={true}
              //onMapReady={this.onMapReady}
              //onRegionChangeComplete={this.onRegionChange}
              >
              <MapView.Marker
              coordinate={{ "latitude": this.state.region.latitude,
              "longitude": this.state.region.longitude }}
              title={"Your Location"}
              draggable />
          </MapView>
        </View>
      </View>);

  /*
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} provider={PROVIDER_GOOGLE} 
        showsUserLocation={true}/>
      </View>
    );*/
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

/*import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});*/
# react-native-map-cluster
React Native Map Clustering component for multiple markers 

## Installation
1. First, download package from npm with yarn/npm
`npm install react-native-map-cluster`  or `yarn add react-native-map-cluster`
2. **if you are already linked `react-native-maps` package you will skip this line**
Second, you have to link `react-native-maps` library for successfully work
3. And you are done 😄 

## Component API 
| Prop Name  | Type  | Default  | Required | Note  |
|:-:|:-:|:-:|:-:|---|
| latitudeZoom | boolean  | 4  | 👍  | This is latitudeDelta number between 1 and 10 is required 
| longitudeZoom  | boolean  | 4  | 👍  | This for longitudeDelta number between 1 and 10 is required
| initialRegion  | object  | --  | 👍 | That is requirement for maps initial region |
| region | object | -- | 👍 | This is for markers coordinates data #lookthatapi | 
| renderMap | function | `<MapView />` | 🐸 | You have to add a map view with a child if you want to customize map view |
| renderMarker | function | `<MapView.Marker />` | 🐸 / 👍 | If you want to customize markers you have to add to props |
| renderCluster | function | Our own cluster views |  🐸 / 👍 | If you want to customize marker clusters you have to add to props |
| isTouchable | boolean | true |🐸| http://i.giphy.com/pWNvoO3IdudYA.gif |
| onRegionChange | function | --- | as you wish | If you need currently region data you have to add this |
| style | object | `...StyleSheet.absoluteFillObject` | as you wish | If you need styling map you have to add this. |

## Props API
### region
Firstly region props using [geojson](http://geojson.org/geojson-spec.html) and you have to convert data for compilability 
Example : 
```javascript
    type: 'Map',
    properties: {
        lat_x: "Point Latitude",
        long_x: "Point Longitude",
    },
    geometry: {
        type: 'Point',
        coordinates: [
            longitude,
            latitude
        ]
    }
```
If you need some data add in properties key with `propertiesName: value` like this

### renderMarker
`renderMarker` function returns markers data, marker data is our regions data is include inside properties and coordinates 
Usage:
```javascript
// marker.geometry.coordinates[1] === "latitude" marker.geometry.coordinates[0] === "latitude"
renderMarker(marker) {
    return(
        <MapView.Marker                 
            coordinate={{
                latitude: marker.geometry.coordinates[1],
                longitude: marker.geometry.coordinates[0],
            }}
        >
            <View>
                <Text>{ marker.properties.name }</Text>
            </View>
        </MapView.Marker>
    );
}
```

### renderCluster
`renderCluster` function returns points count and cluster point coordinates
Usage: 
```javascript
renderCluster(marker) {
    return (
        <MapView.Marker
            key={ marker.properties.id }
            coordinate={{
            latitude: marker.geometry.coordinates[1],
            longitude: marker.geometry.coordinates[0],
            }}
        >
            <View>
                <Text>{ marker.properties.point_count }</Text>
            </View>
        </MapView.Marker>
    );
}
```

### renderMap
If you want it customize map you have to add this. Actually children is markers and your own children elements in component
Usage: 
```javascript 
renderMap(children) {
    return (
        <MapView
            ref={ref => { this.map = ref; }}
            style={styles.map}
            showsUserLocation={ true }
        >
            { children }
        </MapView>
    );
}
```
### onRegionChange
If you need currently region coordinate use this. It returns longitude and latitude paramters
Usage: 
```javascript 
    onRegionChange={ (region) => this.yourFunction(region) }
```

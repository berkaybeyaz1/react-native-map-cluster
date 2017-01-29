/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import supercluster from 'supercluster';
class ClusterMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: props.initialRegion
    }
    this.renderMap = this.renderMap.bind(this);
  }
  componentDidMount() {
    region = this.props.region
    const markers = this._createCluster(this.state.markers);
    this.setState({
      clusters: markers,
      loading: false,
    });
  }
  componentWillMount(){
    console.log('sasa')
  } 
  // Get delta numbers
  _coordinatesDelta(){
    const ratio = 11.5000345;
    const latitudeDelta = this.props.latitudeZoom / ratio;
    const longitudeDelta = this.props.longitudeZoom / ratio;
    return { 
      latitudeDelta,
      longitudeDelta 
    }; 
  }
  componentWillMount() {
    console.log(this.props.region);
    const markers = this._createCluster(this.props.region);
    this.state = {
      markers: this.props.region,
      loading: false,
      clusters: markers,
      region: this.props.initialRegion
    };
  }
  _createCluster(data) {
    const index = supercluster({
      radius: this.props.clusterRadius,
      maxZoom: this.props.zoomLevel,
      nodeSize: 128,
    });
    index.load(data.features);
    return index;
  }
  getZoomLevel(region = this.state.region) {
    const angle = region.longitudeDelta;
    let level = Math.round(Math.log(360 / angle) / Math.LN2);
    return level;
  }
  _createRegions(){
    const padding = this.props.clusterPadding;
    const markers = this.state.clusters.getClusters([-50, -85, 50, 85], this.getZoomLevel());
    return markers.map(marker => this.renderMarkers(marker))
  }
  renderMarkers(marker) {
    console.log('ilk marker')
    if(marker.properties.point_count) {
        return(
          <MapView.Marker
            key={Math.random()}
            coordinate={{
              latitude: marker.geometry.coordinates[0],
              longitude: marker.geometry.coordinates[1],
            }}
            flat={ true }
            >
            <View>
            <Text>{marker.properties.point_count}</Text>
            </View>
          </MapView.Marker>
        );
    } else {
      return (
        <MapView.Marker
          coordinate={{
            latitude: marker.geometry.coordinates[0],
            longitude: marker.geometry.coordinates[1]
          }}
          title={marker.properties.name}
        />
      );
    }
  }
  renderMap() {
      console.log('calisti bu map');
  }
  render() {
    console.log('ilk render')
    return (
      <MapView
        onRegionChange={ (region) => this.setState({mapRegion: region}) }
        style={ this.props.style }
        showsUserLocation={ true }
      >
        {
        this.state.loading ? null :
        this._createRegions()
        }
      </MapView>
    );
  }
}
ClusterMap.defaultProps = {
  latitudeZoom: 4,
  longitudeZoom: 4,
  zoomLevel: 16,
  clusterRadius: 40,
  style: StyleSheet.absoluteFillObject,
  isTouchable: true,
  clusterPadding: 0.25
}
ClusterMap.propTypes = {
  latitudeZoom: React.PropTypes.number.isRequired,
  longitudeZoom: React.PropTypes.number.isRequired,
  initialRegion: React.PropTypes.object.isRequired,
  region: React.PropTypes.object.isRequired,
  renderMap: React.PropTypes.func,
  renderMarker: React.PropTypes.func,
  renderCluster: React.PropTypes.func,
  isTouchable: React.PropTypes.bool,
  onRegionChange: React.PropTypes.func,
  style: React.PropTypes.oneOfType[React.PropTypes.number, React.PropTypes.object],
  zoomLevel: React.PropTypes.number,
  clusterRadius: React.PropTypes.number,
  clusterPadding: React.PropTypes.number
};

export default ClusterMap;
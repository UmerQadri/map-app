import React, { Component } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { MAP_INITIAL_REGION } from "../../constants";

import { styles } from "./styles";

class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={MAP_INITIAL_REGION} />
      </View>
    );
  }
}

export default Map;

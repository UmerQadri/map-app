import React, { Component } from "react";
import { View, Text } from "react-native";
import MapView from 'react-native-maps';

import { styles } from "./styles";

class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    );
  }
}

export default Map;

import React, { Component } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { connect } from "react-redux";

import { TaskPresenter } from "../../presenter";
import { getTasks } from "../../actions/taskActions";

import { MAP_INITIAL_REGION } from "../../constants";

import { styles } from "./styles";

class Map extends Component {
  componentDidMount() {
    setInterval(this._getTasks, 5000);
  }

  _getTasks = () => {
    const { getTasks } = this.props;
    TaskPresenter.sendGetTasksRequest(getTasks);
  };

  renderMarkers() {
    const { tasks } = this.props;

    return tasks.map((item) => {
      if (item && item.address && item.address.location) {
        const coords = item.address.location.coordinates;

        const latlng = {
          latitude: coords[1],
          longitude: coords[0],
        };

        return <Marker coordinate={latlng} />;
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={MAP_INITIAL_REGION}>
          {this.renderMarkers()}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const actions = { getTasks };

export default connect(mapStateToProps, actions)(Map);

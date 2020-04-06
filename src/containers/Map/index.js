import React, { Component } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { connect } from "react-redux";

import { TaskPresenter } from "../../presenter";
import { getTasks } from "../../actions/taskActions";

import { MAP_INITIAL_REGION } from "../../constants";

import { styles } from "./styles";

class Map extends Component {
  state = {
    coords: [],
  };

  componentDidMount() {
    setInterval(this._getTasks, 5000);
  }

  _getTasks = () => {
    const { getTasks } = this.props;
    TaskPresenter.sendGetTasksRequest(getTasks, this._onSuccessGetTasks);
  };

  _onSuccessGetTasks = () => {
    const { tasks } = this.props;

    const coords = TaskPresenter.getLatLngArr(tasks);

    this.setState({ coords }, this._zoomToMarkers);
  };

  _zoomToMarkers() {
    const { coords } = this.state;

    this.mapRef.fitToCoordinates(coords, {
      edgePadding: { top: 25, right: 25, bottom: 25, left: 15 },
    });
  }

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
        <MapView
          style={styles.map}
          initialRegion={MAP_INITIAL_REGION}
          ref={(map) => (this.mapRef = map)}
        >
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

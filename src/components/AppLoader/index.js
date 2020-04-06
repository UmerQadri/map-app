import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";

class AppLoader extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
  };

  static defaultProps = {
    isFetching: false,
  };

  render() {
    const { isFetching } = this.props;

    if (isFetching) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size={"large"} />
        </View>
      );
    }

    return null;
  }
}

export default AppLoader;

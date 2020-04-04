import React, { Component } from "react";
import { Button } from "react-native";

import PropTypes from "prop-types";

class AppButton extends Component {
  static propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    color: PropTypes.string,
  };

  static defaultProps = {
    title: "Press",
    onPress: () => {},
    color: "#000",
  };

  render() {
    const { title, onPress, color } = this.props;

    return <Button title={title} onPress={onPress} color={color} />;
  }
}

export default AppButton;

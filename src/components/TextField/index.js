import React, { Component } from "react";
import { TextInput } from "react-native";

import PropTypes from "prop-types";

import { styles } from "./styles";

class TextField extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChangeText: PropTypes.func,
    style: PropTypes.object,
  };

  static defaultProps = {
    placeholder: "Type here",
    value: "",
    onChangeText: () => {},
    style: {},
  };

  render() {
    const { placeholder, value, onChangeText, style } = this.props;

    return (
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, style]}
      />
    );
  }
}

export default TextField;

import React, { Component } from "react";
import { View, Text } from "react-native";

import { TextField, AppButton } from "../../components";

import { Colors } from "../../theme";

import { styles } from "./styles";

class AddTask extends Component {
  state = {
    task: "",
  };

  _onChangeTask = (task) => {
    this.setState({ task });
  };

  _onPressTask = () => {
    alert("pressed");
  };

  renderHeading() {
    return <Text style={styles.label}>Add Task</Text>;
  }

  renderInput() {
    const { task } = this.state;

    return (
      <TextField
        placeholder={"Enter address here"}
        value={task}
        onChangeText={this._onChangeTask}
        style={styles.input}
      />
    );
  }

  renderButton() {
    return (
      <AppButton
        color={Colors.primary}
        title={"Add Task"}
        onPress={this._onPressTask}
      />
    );
  }

  renderSection() {
    return (
      <View style={styles.section}>
        {this.renderHeading()}
        {this.renderInput()}
        {this.renderButton()}
      </View>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderSection()}</View>;
  }
}

export default AddTask;

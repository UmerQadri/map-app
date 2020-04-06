import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { TaskPresenter } from "../../presenter";

import { addTask } from "../../actions/taskActions";

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
    const { task } = this.state;
    if (task !== "") {
      this._addTask();
    }
  };

  _addTask = () => {
    const { task } = this.state;
    const { addTask } = this.props;

    TaskPresenter.sendAddTaskRequest(addTask, task, this._onSuccesTaskAdd);
  };

  _onSuccesTaskAdd = () => {
    this.setState({ task: "" });
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

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

const actions = { addTask };

export default connect(mapStateToProps, actions)(AddTask);

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Colors } from "../theme";

import { Map, AddTask } from "../containers";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { labelStyle } = styles;

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: "beside-icon",
        labelStyle,
        activeTintColor: Colors.primary,
      }}
      initialRouteName={"Add Task"}
    >
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Add Task" component={AddTask} />
    </Tab.Navigator>
  );
};

const styles = {
  labelStyle: {
    fontSize: 16,
  },
};

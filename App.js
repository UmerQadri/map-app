import React, { Component } from "react";
import { Provider } from "react-redux";

import { AppNavigator } from "./src/navigation";

import configureStore from "./src/store";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;

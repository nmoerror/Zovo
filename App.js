import React, { Component } from "react";
import Welcome from "./components/screens/Welcome";
import Profile from "./components/screens/Profile";
import GettingStarted from "./components/screens/GettingStarted";
import Email from "./components/screens/Email";
import Main from "./components/screens/Main";
import Settings from "./components/screens/Settings";

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <Welcome />
    };
  }

  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.setState({ component: <GettingStarted /> });
    }, 4000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }
  render() {
    return this.state.component;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App,
      navigationOptions: () => ({
        header: null,
        headerTransparent: true,
        headerBackTitle: " "
      })
    },
    GettingStarted: {
      screen: GettingStarted,
      navigationOptions: () => ({
        header: null,
        headerTransparent: true,
        headerBackTitleColor: "white"
      })
    },
    Email: {
      screen: Email,
      navigationOptions: () => ({
        headerBackTitleVisible: false,
        headerBackTitleColor: "white",
        headerTransparent: true,
        headerBackTitleColor: "white"
      })
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

const AppBaseNavigator = createSwitchNavigator({
  Home: {
    screen: AppNavigator
  },
  Main: {
    screen: Main
  }
});

export default createAppContainer(AppBaseNavigator);

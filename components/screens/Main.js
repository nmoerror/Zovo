import React, { Component } from "react";
import { Platform, View, StyleSheet, Image, Text } from "react-native";
import LogoSm from "../elements/LogoSm";
import Switch from "../elements/Switch";
import DashboardButton from "../elements/DashboardButton";
import SettingsButton from "../elements/SettingsButton";
import DraggableProfile from "../elements/DraggableProfile";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      switch1Value: false
    };
  }
  toggleSwitch1 = value => {
    this.setState({ switch1Value: value });
    console.warn("Switch 1 is: " + value);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxOne]} />
        <View style={[styles.boxContainer, styles.boxTwo]}>
          <DashboardButton />
          <Switch
            toggleSwitch1={this.toggleSwitch1}
            switch1Value={this.state.switch1Value}
          />
          <SettingsButton />
        </View>
        <View style={[styles.boxContainer, styles.boxThree]}>
          <DraggableProfile style={styles.draggableProfile} />
        </View>
        <View style={[styles.boxContainer, styles.boxFour]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Main wrapper
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(255,255,255)"
  },

  boxContainer: {
    flex: 1
  },

  boxOne: {
    maxHeight: Platform.OS === "ios" ? 45 : 15,
    flexDirection: "row",
    backgroundColor: "white"
  },

  boxTwo: {
    flexDirection: "row",
    maxHeight: 50,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  boxThree: {},
  draggableProfile: {},

  boxFour: {
    maxHeight: 80,
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});

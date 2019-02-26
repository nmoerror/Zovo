import React, { Component } from "react";
import { Platform, View, StyleSheet, Image, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Search from "./Search";
import Settings from "./Settings";
import ProfilePhoto from "../elements/ProfilePhoto";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      title: "Dashboard"
    };
  }
  setTitle1 = () => {
    this.setState({
      title: "Dashboard"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxOne]} />
        <View style={[styles.boxContainer, styles.boxTwo]}>
          <View>
            <Text style={styles.followersNumber}>832</Text>
            <Text style={{ color: "white" }}>Followers</Text>
          </View>
          <ProfilePhoto />
          <View>
            <Text style={styles.followersNumber}>320</Text>
            <Text style={{ color: "white" }}>Following</Text>
          </View>
        </View>
        <View style={[styles.boxContainer, styles.boxThree]} />
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
    backgroundColor: "rgb(113,216,125)"
  },

  //C2 Contains the top of screeen
  boxTwo: {
    flexDirection: "row",
    maxHeight: 110,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgb(113,216,125)"
  },
  photo: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    borderRadius: 130,
    backgroundColor: "white"
  },
  followersNumber: {
    fontSize: 30,
    fontWeight: "600",
    color: "white"
  },

  //C3 Has the bottom of the screen
  boxThree: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

/*
const TabNavigator = createBottomTabNavigator({
  Home: Main,
  Search: { screen: Search },
  Settings: { screen: Settings }
}); */

// export default createAppContainer(TabNavigator);

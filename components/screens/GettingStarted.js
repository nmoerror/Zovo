import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { DrawerNavigator } from "react-navigation";
import Email from "./Email";
import {
  Alert,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground
} from "react-native";

class GettingStarted extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bg0.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={[styles.boxContainer, styles.boxOne]}>
            <Image
              style={styles.zovoLogo}
              source={require("../../assets/logo_full.png")}
            />
          </View>
          <View style={[styles.boxContainer, styles.boxTwo]} />
          <View style={[styles.boxContainer, styles.boxThree]}>
            <View style={styles.greenButton}>
              <Button
                onPress={() => this.props.navigation.navigate("Email")}
                title="sign up free"
                color="white"
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(255,255,255)"
  },
  boxContainer: {
    flex: 1
  },
  boxOne: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200
  },
  boxTwo: {
    backgroundColor: "transparent",
    minHeight: 300
  },
  boxThree: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  zovoLogo: {
    resizeMode: "stretch",
    width: 200,
    height: 46,
    marginTop: 80
  },
  greenButton: {
    backgroundColor: "rgb(113,216,125)",
    minWidth: 180,
    borderRadius: 260
  }
});

export default withNavigation(GettingStarted);

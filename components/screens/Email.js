import React, { Component } from "react";
import ATextInput from "../elements/ATextInput";
import { withNavigation } from "react-navigation";
import {
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Text,
  Platform
} from "react-native";

_check = () => {};

export default class Email extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bg3.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={[styles.boxContainer, styles.boxOne]}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Create account
            </Text>
          </View>
          <View style={[styles.boxContainer, styles.boxTwo]}>
            <Text style={styles.whiteText}>What's your email?</Text>
            <ATextInput />
            <Text style={{ color: "white", fontSize: 11, opacity: 0.8 }}>
              You'll need to confirm this email later.
            </Text>
          </View>

          <View style={[styles.boxContainer, styles.boxThree]}>
            <View style={styles.nextButton}>
              <Button title="next" color="black" disabled={false} />
            </View>
            <Button
              onPress={() => this.props.navigation.navigate("Main")}
              title="Skip authentication"
              color="white"
            />
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
    flex: 1,
    padding: 10
  },

  boxOne: {
    maxHeight: Platform.OS === "ios" ? 45 : 15,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },

  //C2 Contains the top of screeen
  boxTwo: {
    maxHeight: 110,
    justifyContent: "center"
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
    alignItems: "center"
  },

  whiteText: {
    color: "white"
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: "white",
    minWidth: 100,
    borderRadius: 20,
    opacity: 0.7
  }
});

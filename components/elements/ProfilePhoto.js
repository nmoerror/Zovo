import React, { Component } from "react";
import { Platform, View, Image, Text } from "react-native";
import styles from "./Styles";

export default class ProfilePhoto extends Component {
  render() {
    return (
      <View style={styles.photo}>
        <Image
          source={require("../../assets/example.jpg")}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
      </View>
    );
  }
}

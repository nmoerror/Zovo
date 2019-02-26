import React, { Component } from "react";
import { Platform, View, Image, Text } from "react-native";
import styles from "./Styles";

export default class LogoSm extends Component {
  render() {
    return (
      <View style={styles.photo}>
        <Image
          source={require("../../assets/logo_sm.png")}
          style={{ width: 40, height: 40 }}
        />
      </View>
    );
  }
}

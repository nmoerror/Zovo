import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import Button from "react-native-button";

const DashboardButton = props => {
  return (
    <View>
      <Button title="">
        <Image
          source={require("../../assets/setts.png")}
          style={styles.graphButton}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  graphButton: {
    width: 30,
    height: 30
  }
});

export default DashboardButton;

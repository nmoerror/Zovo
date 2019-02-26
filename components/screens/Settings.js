import React, { Component } from "react"; import { Modal, StyleSheet, Text, TouchableHighlight, View, Alert } from 'react-native';
import AModal from "../elements/AModal"

export default class Settings extends Component {
  render() {
    return (<View style={styles.container}><AModal /></View>)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
})
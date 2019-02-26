import React, { Component } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";

class Quote extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 0.6, // Animate to opacity: 1 (opaque)
        duration: 3000 // Make it take a while
      }
    ).start(); // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `Quote` in place of a `View` in your components:
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.text}>
        <Quote>
          <Text>Building Businesses & Influencers..</Text>
        </Quote>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    marginTop: 20
  }
});

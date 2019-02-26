import React, { Component } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Quote from "../elements/Quote";

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0)
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      userNativeDriver: true
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.9, 1]
                })
              }
            ]
          },
          this.props.style
        ]}
      />
    );
  }
}

const Welcome = () => (
  <View style={styles.container}>
    <ImageLoader source={require("../../assets/logo_full.png")} />
    <Quote />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255,255,255)"
  },
  subtitle: {
    marginTop: 10
  }
});

export default Welcome;

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREN_WIDTH = Dimensions.get("window").width;

const Users = [
  { id: "1", uri: require("./assets/p1.jpg") },
  { id: "2", uri: require("./assets/p2.jpg") },
  { id: "3", uri: require("./assets/p3.jpg") },
  { id: "4", uri: require("./assets/p4.jpg") },
  { id: "5", uri: require("./assets/p5.jpg") }
];

export default class DraggableProfile extends Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREN_WIDTH / 2, 0, SCREN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp"
    });
    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate
        },
        ...this.position.getTranslateTransform()
      ]
    };
    this.followOpacity = this.position.x.interpolate({
      inputRange: [-SCREN_WIDTH / 2, 0, SCREN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    });

    this.ignoreOpacity = this.position.x.interpolate({
      inputRange: [-SCREN_WIDTH / 2, 0, SCREN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp"
    });
    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREN_WIDTH / 2, 0, SCREN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp"
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREN_WIDTH / 2, 0, SCREN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp"
    });
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start();
        }
      }
    });
  }

  renderUsers = () => {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREN_WIDTH,
                padding: 10,
                position: "absolute"
              }
            ]}
          >
            <Animated.View
              style={{
                opacity: this.followOpacity,
                transform: [{ rotate: "-30deg" }],
                position: "absolute",
                top: 50,
                left: 20,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  color: "green",
                  fontSize: 30,
                  fontWeight: "900",
                  padding: 10
                }}
              >
                FOLLOW
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: this.ignoreOpacity,
                transform: [{ rotate: "+30deg" }],
                position: "absolute",
                top: 50,
                right: 20,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  color: "red",
                  fontSize: 30,
                  fontWeight: "900",
                  padding: 10
                }}
              >
                IGNORE
              </Text>
            </Animated.View>

            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }]
              },
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREN_WIDTH,
                padding: 10,
                position: "absolute"
              }
            ]}
          >
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      }
    }).reverse();
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ height: 60 }} />
        <View style={{ flex: 1 }}>{this.renderUsers()}</View>
        <View style={{ height: 60 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

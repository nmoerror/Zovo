import React, { Component } from "react";
import { TextInput, View, Keyboard } from "react-native";

export default class TxtInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChangeText = (typedText) => {
    this.setState({ text: typedText })
    re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(text)) {
      console.log("a")
    }
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          opacity: 0.5,
          padding: 10,
          marginBottom: 5,
          marginTop: 5,
          borderRadius: 4
        }}
      >
        <TextInput
          multiline={false}
          editable={true}
          maxLength={40}
          keyboardAppearance={"default"}
          onChangeText={() => console.warn("a")}
        //value={this.state.text}
        />
      </View>
    );
  }
}

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

export default class form extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }
  todoTextHandler = (val) => {
    this.setState({ todo: val });
  };
  render() {
    return (
      <View>
        <TextInput
          multiline
          placeholder="write a todo"
          style={styles.todoInput}
          onChangeText={this.todoTextHandler}
        />
        <View style={styles.btn}>
          <Button
            title="Add todo"
            color="#574b90"
            onPress={() => {
              console.log("todo", this.state.todo);
              this.props.todoHandler(this.state.todo);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoInput: {
    borderColor: "#9e579d",
    backgroundColor:'#fc85ae',
    color:'#574b90',
    borderWidth: 3,
    height: 80,
    marginHorizontal: 20,
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

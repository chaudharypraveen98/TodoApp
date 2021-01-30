import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class todoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.singleTodoContainer}>
        <MaterialIcons
          name="delete"
          size={25}
          onPress={() => this.props.todoRemoveHandler(this.props.item.key)}
        />
        <Text style={styles.todoText}>{this.props.item.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoText: {
    flex:1,
    color: "#cabbe9",
    fontSize: 18,
    flexWrap: "wrap",
  },
  singleTodoContainer: {
    backgroundColor: "#9e579d",
    borderRadius:25,
    flexDirection: "row",
    marginVertical: 10,
    paddingVertical: 10,
    textAlign: "center",    
  },
});

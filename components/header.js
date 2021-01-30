import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default class header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#574b90",
    paddingTop:40,
  },
  headerText:{
    textAlign:'center',
    fontSize:24,
    color:'white'
  }
});

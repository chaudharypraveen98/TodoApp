import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  Touchable,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import Form from "./components/form";
export default function App() {
  const [todo, setTodo] = useState([
    { text: "make readme.md", key: "1" },
    { text: "update readme.md", key: "2" },
    { text: "modify readme.md", key: "3" },
    { text: "delete readme.md", key: "4" },
  ]);

  const todoHandler = (task) => {
    if (task.length > 3) {
      setTodo((prevTodo) => {
        return [{ text: task, key: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert("OOPS!", "Todo must be 3 chars long", [
        { text: "UNDERSTOOD", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  const todoRemoveHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todoitem) => todoitem.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header />
        <ImageBackground source={require('./assets/backTodo.jpg')} style={styles.image}>
          {/* form */}
          <View>
            <Form todoHandler={todoHandler} />
          </View>

          {/* container */}
          <View style={styles.todoContainer}>
            <FlatList
              data={todo}
              keyExtractor={(item) => {
                return item.key;
              }}
              renderItem={({ item }) => (
                <TodoItem item={item} todoRemoveHandler={todoRemoveHandler} />
              )}
            />
          </View>
          
          {/* credits */}
          <View style={styles.introduction}>
            <Text style={styles.centerText}>
              This app is created by Praveen Chaudhary
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#303a52",
  },
  todoContainer: {
    paddingHorizontal: 20,
  },
  introduction: {
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    left: 0,
    right: 0,
    paddingBottom: 10,
    backgroundColor: "#574b90",
    alignSelf: "stretch",
  },
  centerText: {
    textAlign: "center",
    fontSize: 16,
    color: "#fc85ae",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  btn: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  singleTodoContainer: {
    flexDirection: "row",
  },
});

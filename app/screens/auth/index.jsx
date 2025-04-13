import { router, useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    // if (email === "admin" && password === "admin") {
    //   router.push("/screens/ScanQr");
    // } else {
    //   alert("error");
    // }
    router.push("/screens/ScanQr");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor="#fff"
        onChangeText={(text) => {
          setEmail(text);
        }}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        placeholderTextColor="#fff"
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
      />
      <Pressable style={styles.button} onPress={signIn}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#17171F",
    gap: 10,
  },
  button: {
    height: 50,
    width: "80%",
    backgroundColor: "#39FFC2",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  input: {
    height: 50,
    width: "80%",
    borderRadius: 8,
    padding: 15,
    backgroundColor: "#2C2C34",
    fontSize: 16,
    color: "#fff",
  },
});

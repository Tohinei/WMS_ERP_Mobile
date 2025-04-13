import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import Login from "./screens/auth";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
}

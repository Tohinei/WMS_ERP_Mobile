import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function authlayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

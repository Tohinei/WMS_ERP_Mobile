import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function ScanQr() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState<string>("");

  const [labelNr, setLabel] = useState<string>("");
  const [searchNr, setsearchNr] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [supplierId, setSupplierId] = useState<string>("");

  useEffect(() => {
    if (scannedData) {
      setLabel(scannedData.substring(2, 14));
      setsearchNr(scannedData.substring(15, scannedData.length - 3));
      setQuantity(parseInt(scannedData.substring(scannedData.length - 2), 10));
    }
  }, [scannedData]);

  if (!permission || !permission.granted) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.infoText}>No access to camera</Text>
        <Pressable onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Grant Camera Permission</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView
        facing="back"
        style={styles.camera}
        onBarcodeScanned={({ data }) => {
          setScannedData(data);
        }}
      />

      {scannedData && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Serial ID: {labelNr}</Text>
          <Text style={styles.resultText}>Client ID: {searchNr}</Text>
          <Text style={styles.resultText}>Quantity: {quantity}</Text>
          <Text style={styles.resultText}>{scannedData}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17171F",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 16,
  },
  camera: {
    height: 300,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 16,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 12,
    color: "#333",
  },
  button: {
    backgroundColor: "#1E88E5",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  resultContainer: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  resultText: {
    color: "#fff",
    fontSize: 14,
  },
});

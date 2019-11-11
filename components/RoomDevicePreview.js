import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const RoomDevicePreview = props => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/images/sun.png")} />
      </View>
      <View>
        <Text style={styles.deviceName}>{props.deviceName}</Text>
        <Text style={styles.deviceInfo}>{props.deviceInfo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  deviceName: {
    fontSize: 12
  },
  deviceInfo: {
    fontSize: 20
  }
});

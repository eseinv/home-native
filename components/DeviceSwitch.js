import React from "React";
import { View, Text, Image, StyleSheet, Alert } from "react-native";

export const DeviceSwitch = props => {
  const { deviceName, deviceStatus } = props;
  return (
    <View style={styles.deviceWrapper}>
      <View style={styles.deviceHeader}>
        <View style={styles.deviceInnerHeader}>
          <Text style={styles.deviceType}>Switch</Text>
          {deviceStatus === "ON" ? (
            <Image source={require("../assets/images/switchOn.png")} />
          ) : (
            <Image source={require("../assets/images/switchOff.png")} />
          )}
        </View>
      </View>
      <View style={styles.deviceIcon}>
        {deviceStatus === "ON" ? (
          <Image source={require("../assets/images/wind.png")} />
        ) : (
          <Image source={require("../assets/images/windOff.png")} />
        )}
      </View>
      <View style={styles.deviceInfo}>
        <Text style={styles.deviceName}>{deviceName}</Text>
        <Text style={styles.deviceStatus}>
          ({deviceStatus === "ON" ? "ON" : "OFF"})
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deviceWrapper: {
    width: 158,
    height: 172,
    marginTop: 30,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#fff"
  },
  deviceHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 15
  },
  deviceInnerHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  deviceType: {
    color: "#00B894",
    fontSize: 12,
    letterSpacing: 0.71
  },
  deviceIcon: {
    flex: 1,
    alignSelf: "center",
    marginBottom: 20
  },
  deviceInfo: {
    alignItems: "center",
    paddingBottom: 9
  },
  deviceName: {
    color: "#00B894",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.94
  },
  deviceStatus: {
    color: "#00B894",
    fontSize: 12
  }
});

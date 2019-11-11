import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { RoomDevicePreview } from "./RoomDevicePreview.js";

// const Sun = "../assets/images/sun.png";
// const Wind = "../assets/images/wind.png";

export const RoomOverview = props => {
  const { roomName, roomDevices } = props;
  return (
    <View style={styles.roomWrapper}>
      <View style={styles.roomHeader}>
        <Text style={styles.roomName}>{roomName}</Text>
      </View>

      <View style={styles.roomBody}>
        {roomDevices.map(device => (
          <View style={styles.roomDevicePreview} key={device.id}>
            <RoomDevicePreview
              deviceName={device.name}
              deviceInfo={device.info}
              icon={device.icon}
            />
          </View>
        ))}
      </View>

      <View style={styles.roomFooter}>
        <Text style={styles.roomFooterText}>OPEN ROOM</Text>
        <Image
          style={styles.roomFooterChevron}
          source={require("../assets/images/chevron.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  roomWrapper: {
    flex: 1,
    width: "87%",
    alignSelf: "center",
    marginTop: 30
  },
  roomHeader: {
    backgroundColor: "#1ABC9C",
    height: 50,
    justifyContent: "center",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4
  },
  roomName: {
    color: "#fff",
    fontSize: 16,
    paddingLeft: 20,
    fontWeight: "500"
  },
  roomBody: {
    height: 85,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  roomFooter: {
    height: 45,
    borderTopColor: "#1B1B1B",
    borderTopWidth: 0.5,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    flexDirection: "row"
  },
  roomFooterText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1B1B1B",
    letterSpacing: 0.5
  },
  roomFooterChevron: {
    marginRight: 20,
    width: 7,
    height: 13
  },
  roomDevicePreview: {
    flex: 1
  }
});

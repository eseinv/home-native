import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { RoomOverview } from "../components/RoomOverview";
import { DeviceSwitch } from "../components/DeviceSwitch";

//  simulation of a get request
const rooms = [
  {
    id: 1,
    name: "Living Room",
    devices: [
      { id: 1, name: "Temperature", info: "24°C", icon: "sun" },
      { id: 2, name: "A/C", info: "OFF", icon: "wind" }
    ]
  }
  // {
  //   id: 2,
  //   name: "Kitchen",
  //   devices: [
  //     { id: 1, name: "Lights", info: "ON", icon: "light" },
  //     { id: 2, name: "Alarm", info: "OFF", icon: "alarm" }
  //   ]
  // }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.appHeader}>
          <Text style={styles.appName}>SMARTHOME</Text>
        </View>
        <View style={styles.addDevice}>
          <Text style={styles.addDeviceText}>+</Text>
        </View>

        <View style={styles.container}>
          {rooms.map(room => (
            <RoomOverview
              key={room.id}
              roomName={room.name}
              roomDevices={room.devices}
            />
          ))}
        </View>
        <View style={styles.devicesContainer}>
          <DeviceSwitch deviceName="Air condition" deviceStatus="ON" />
          <DeviceSwitch deviceName="Air condition" deviceStatus="OFF" />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

// handleLearnMorePress = () => {
//   WebBrowser.openBrowserAsync("https://google.com");
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  contentContainer: {
    paddingTop: 60,
    backgroundColor: "#fff"
  },
  appHeader: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 20
  },
  appName: {
    alignSelf: "center",
    fontSize: 20,
    letterSpacing: 2
  },
  addDevice: {
    position: "absolute",
    right: 30,
    paddingTop: 60
  },
  addDeviceText: {
    fontSize: 20
  },
  devicesContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#eee"
  }
  // tabBarInfoContainer: {
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: "black",
  //       shadowOffset: { width: 0, height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3
  //     },
  //     android: {
  //       elevation: 20
  //     }
  //   }),
  //   alignItems: "center",
  //   backgroundColor: "#fbfbfb",
  //   paddingVertical: 20
  // },
});

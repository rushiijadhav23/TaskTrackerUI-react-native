import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HomeHeader() {
  return (
    <View style={[styles.headerWrapper, { paddingTop: 40}]}>
      <SafeAreaView>
        <View style={styles.headerRow}>

          {/* Left: Avatar + Greeting */}
          <View style={styles.leftSection}>
            <Image
              source={require('../assets/images/profilePic.jpeg')}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.helloText}>Hello! 👋</Text>
              <Text style={styles.nameText}>Rushikesh Jadhav</Text>
            </View>
          </View>

          {/* Right: Notification Bell */}
          <TouchableOpacity style={styles.bellButton} activeOpacity={0.8}>
            <MaterialIcons name="notifications" size={24} color="black"/>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 28,
    paddingTop: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  helloText: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.85)",
    fontWeight: "400",
  },
  nameText: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  bellButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
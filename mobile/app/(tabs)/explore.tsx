import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ExploreScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png" }}
          style={styles.icon}
        />
        <Text style={styles.title}>GameUp - Explore</Text>
      </View>

      <ScrollView contentContainerStyle={styles.gamesContainer}>
        <View style={styles.row}>
          <Image
            source={{ uri: "https://play-lh.googleusercontent.com/Z9RgxZJ8jE7aYopSmW9tG7SivPi7DApLwR4I3_UoK7yhfP7o4rB9FetbUP6GcM_Fhg" }}
            style={styles.gameImage}
          />
          <Image
            source={{ uri: "https://play-lh.googleusercontent.com/2oPj3R7uS7SgLk6uGjFJQ6MST7MfuCMy5RmjUgM4e5CwQ8wa-7dJ3M5u6gbyhPLoSg" }}
            style={styles.gameImage}
          />
        </View>

        <View style={styles.row}>
          <Image
            source={{ uri: "https://play-lh.googleusercontent.com/u3cFWd1IlqX7PmRtXk5Q0QH2q-5hJfqf5UcxSviPVhJYcRoLwTckjPq4StzH12nKxA" }}
            style={styles.gameImage}
          />
          <Image
            source={{ uri: "https://cdn-1.webcatalog.io/catalog/poki-temple-run-2/poki-temple-run-2-icon-filled-256.png?v=1714778487814" }}
            style={styles.gameImage}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png" }}
            style={styles.homeIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B0082",
  },
  header: {
    backgroundColor: "#FFD700",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4B0082",
  },
  gamesContainer: {
    padding: 20,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  gameImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  footer: {
    backgroundColor: "#FFD700",
    padding: 12,
    alignItems: "center",
  },
  homeIcon: {
    width: 30,
    height: 30,
  },
});
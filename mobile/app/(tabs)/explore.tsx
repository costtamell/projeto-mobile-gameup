import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image 
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png" }} 
          style={styles.icon} 
        />
        <Text style={styles.title}>GameUp</Text>
      </View>

      
      <ScrollView contentContainerStyle={styles.gamesContainer}>
        <View style={styles.row}>
          <Image 
            source={{ uri: "data:image/jpeg;base64,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" }} 
            style={styles.gameImage} 
          />
          <Image 
            source={{ uri: "" }} 
            style={styles.gameImage} 
          />
        </View>

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
        <TouchableOpacity>
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

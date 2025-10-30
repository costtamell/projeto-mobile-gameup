import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Outromel() {
  const handlePlay = () => {
    const url = "https://play.google.com/store/apps/details?id=net.mobigame.zombietsunami&pcampaignid=web_share";
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir o link:", err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="game-controller" size={24} color="#6a0dad" />
        <Text style={styles.title}>GameUp</Text>
      </View>

      <Image
        source={{
          uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT85UnlldTqUNrDM1khUkD3TfYdH9vrwhf7rd9Qh2gOMT5V0vz86jARNszoJM9gSUNhrmMwlvkRBQxU6TEJvUxyIuQtETAVBK-kltusFCZc",
        }}
        style={styles.image}
      />

      
      <Text style={styles.gameTitle}>Zumbie Tsunami</Text>
      <Text style={styles.description}>
      Transforme os pedestres em zumbis e crie a maior horda. Devore seus amigos e desafie eles a uma corrida louca destruindo tudo no seu caminho. O Zombie Tsunami orgulhosamente ultrapassou os 200 milhões de jogadores em todo o mundo. - Otimizado para todos os modelos Android.
      </Text>

      
      <View style={styles.stars}>
        <Ionicons name="star" size={20} color="#FFD700" />
        <Ionicons name="star" size={20} color="#FFD700" />
        <Ionicons name="star" size={20} color="#FFD700" />
        <Ionicons name="star" size={20} color="#FFD700" />
        <Ionicons name="star-outline" size={20} color="#FFD700" />
      </View>

      
      <TouchableOpacity style={styles.button} onPress={handlePlay}>
        <Text style={styles.buttonText}>Jogar</Text>
      </TouchableOpacity>

      
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push("/explore")}>
          <Ionicons name="home" size={24} color="#6a0dad" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4B0082", alignItems: "center" },
  header: {
    backgroundColor: "#FFD700",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  title: { color: "#4B0082", fontSize: 18, fontWeight: "bold", marginLeft: 8 },
  image: { width: 180, height: 180, borderRadius: 10, marginVertical: 10 },
  gameTitle: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: "white",
    textAlign: "center",
    width: "85%",
    fontSize: 13,
  },
  stars: { flexDirection: "row", marginTop: 10 },
  button: {
    backgroundColor: "#FFD700",
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { color: "#4B0082", fontWeight: "bold", fontSize: 16 },
  footer: {
    backgroundColor: "#FFD700",
    width: "100%",
    alignItems: "center",
    padding: 10,
    position: "absolute",
    bottom: 0,
  },
});

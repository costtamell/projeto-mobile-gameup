import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router"; 

export default function Outromel() {
  
  const handlePlay = () => {
    Linking.openURL("https://play.google.com/store/apps/details?id=com.supercell.clashroyale&pcampaignid=web_share");
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Ionicons name="game-controller" size={24} color="#6a0dad" />
        <Text style={styles.title}>GameUp</Text>
      </View>

      
      <Image
        source={{
          uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSdYtGjsTezm3dvQEf5nLt_MvTJb9tzQF1PMTQ1sdBg-slGMcv3rFYdhpDwBWwCQY6oHoB9Ux5ULO4J-OFuvGYHcXTGv1LFIESLVilqCEd",
        }}
        style={styles.image}
      />

      
      <Text style={styles.gameTitle}>Clash Royale</Text>
      <Text style={styles.description}>
        Clash Royale é um jogo de estratégia em tempo real que combina elementos de cartas colecionáveis, defesa de torre e batalha online multijogador. O objetivo é destruir as torres do adversário usando um baralho de cartas com tropas, feitiços e defesas, enquanto se defende as próprias torres.
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

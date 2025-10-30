import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Outromel() {
  
  const handlePlay = () => {
    const url = "https://play.google.com/store/apps/details?id=com.gfg.topmodel&pcampaignid=web_share";
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
          uri: "https://play-lh.googleusercontent.com/-5c4MsyKhGqLwJE3gRa3rVaD_f7CaGRTX_UewxDdIhKFQVhGa_4cH1fJqJSl__bDBw",
        }}
        style={styles.image}
      />

      
      <Text style={styles.gameTitle}>Vestir Model - Salão de Moda</Text>
      <Text style={styles.description}>
        É um aplicativo de vestir para Android onde os jogadores podem criar diferentes looks
        para bonecas e supermodelos virtuais, usando uma variedade de roupas, penteados e acessórios.
        O objetivo é treinar o senso de moda, criar estilos com glamour ou fantasia, e partilhar as
        criações com amigos.
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

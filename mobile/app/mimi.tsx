import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router"; 

export default function Outromel() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Ionicons name="game-controller" size={24} color="#6a0dad" />
        <Text style={styles.title}>GameUp</Text>
      </View>

      
      <Image
        source={{
          uri: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/b5c8b617f65be7cc4d56dd3657590ae7/temple-run-2.png",
        }}
        style={styles.image}
      />

      
      <Text style={styles.gameTitle}>Temple Run</Text>
      <Text style={styles.description}>
      Temple Run é um jogo de corrida infinita onde o objetivo é roubar um ídolo amaldiçoado de um templo e fugir dos macacos que o perseguem, superando obstáculos como penhascos, árvores e ruínas. O jogador usa movimentos de deslizar, pular, inclinar e virar o celular para guiar o personagem. Para sobreviver o máximo possível, é preciso coletar moedas para comprar "power-ups" e outros personagens. 
      </Text>

      
      <View style={styles.stars}>
        <Ionicons name="star" size={20} color="#FFD700" />
        <Ionicons name="star" size={20} color="#FFD700" />
        <Ionicons name="star" size={20} color="#FFD700" />
        <Ionicons name="star" size={20} color="#FFD700" />
        <Ionicons name="star-outline" size={20} color="#FFD700" />
      </View>

      
      <TouchableOpacity style={styles.button}>
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

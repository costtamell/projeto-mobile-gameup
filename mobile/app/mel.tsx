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
          uri: "https://tcf.admeen.org/category/3000/2944/400x400/fire-and-water.jpg",
        }}
        style={styles.image}
      />

      
      <Text style={styles.gameTitle}>Fireboy & Watergirl</Text>
      <Text style={styles.description}>
      Fireboy and Watergirl é um jogo cooperativo de quebra-cabeça e plataforma. Fireboy pode ser movido usando as setas do teclado e Watergirl pode ser movido usando as teclas WASD. Fireboy só pode passar pela lava, enquanto Watergirl só pode passar pela água. Se Fireboy ou Watergirl tocarem no elemento oposto, eles morrerão e o nível terá que ser reiniciado. O ácido verde pode matar ambos os personagens. Diamantes vermelhos e azuis podem ser coletados pelos jogadores, e mecanismos como alavancas e botões terão que ser operados com cuidado para que ambos os personagens completem o nível. Assim que um nível for concluído, um gráfico mostrando quantos diamantes foram coletados ao longo do nível será revelado ao(s) jogador(es), bem como sua classificação.
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

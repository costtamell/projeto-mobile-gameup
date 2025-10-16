import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Outromel = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="game-controller" size={24} color="#6a0dad" />
        <Text style={styles.title}>GameUp</Text>
      </View>

      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={styles.image}
      />

      <Text style={styles.gameTitle}>Vestir Model - Salão de Moda</Text>
      <Text style={styles.description}>
        é um aplicativo de vestir para Android onde os jogadores podem criar
        diferentes looks para bonecas e supermodelos virtuais, usando uma
        variedade de roupas, penteados e acessórios. O objetivo é treinar o
        senso de moda, criar estilos com glamour ou fantasia, e partilhar as
        criações com amigos.
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
        <Ionicons name="home" size={24} color="#6a0dad" />
      </View>
    </View>
  );
};

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

export default Outromel;

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const games = [
  { id: 1, name: "Jogo da Memória" },
  { id: 2, name: "Quiz de Perguntas" },
  { id: 3, name: "Corrida Matemática" },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um jogo:</Text>
      {games.map((game) => (
        <TouchableOpacity
          key={game.id}
          style={styles.button}
          onPress={() => router.push(`/game/${game.id}`)}
        >
          <Text style={styles.text}>{game.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: { color: "#fff", fontSize: 18 },
});

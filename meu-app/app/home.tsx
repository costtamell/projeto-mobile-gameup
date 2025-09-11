import { useRouter } from "expo-router";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";

const games = [
  { id: "1", name: "Vestir Model", image: require("../assets/game1.png"), description: "Salão de Moda..." },
  { id: "2", name: "Temple Run 2", image: require("../assets/game2.png"), description: "Corrida infinita..." },
  { id: "3", name: "Fireboy & Watergirl", image: require("../assets/game3.png"), description: "Aventura cooperativa..." },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GameUp</Text>
      <FlatList
        data={games}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => router.push(`/game/${item.id}`)}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4B0082", paddingTop: 40, alignItems: "center" },
  title: { fontSize: 26, color: "#FFD700", marginBottom: 20 },
  card: { backgroundColor: "#FFD700", margin: 10, borderRadius: 10, padding: 10 },
  image: { width: 120, height: 120, borderRadius: 10 },
});

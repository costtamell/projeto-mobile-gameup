import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GameUp</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.button} onPress={() => router.replace("/home")}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#4B0082" },
  title: { fontSize: 28, fontWeight: "bold", color: "#FFD700", marginBottom: 30 },
  input: { width: "80%", backgroundColor: "#FFF", padding: 12, borderRadius: 10, marginBottom: 15 },
  button: { backgroundColor: "#FFD700", padding: 15, borderRadius: 10, width: "60%", alignItems: "center" },
  buttonText: { fontSize: 18, fontWeight: "bold", color: "#4B0082" },
});

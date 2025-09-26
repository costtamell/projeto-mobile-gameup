import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    console.log("BOTÃO CLICADO!"); // Para debug
    
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }
    
    console.log("Tentando navegar para explore...");
    
    // TENTE ESTAS OPÇÕES (uma de cada vez):
    
    // Opção 1: 
    router.push("/(tabs)/explore");
    
    // Opção 2 (se a 1 não funcionar):
    // router.replace("/(tabs)/explore");
    
    // Opção 3 (se as anteriores não funcionarem):
    // router.navigate("/explore");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/000000/controller.png" }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>GameUp</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#666"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleLogin}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C00FF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD700",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 6,
    marginTop: 15,
  },
  input: {
    backgroundColor: "#FFD700",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#000",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#FFD700",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  footer: {
    height: 40,
    backgroundColor: "#FFD700",
  },
});
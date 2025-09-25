import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props): React.JSX.Element {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home"); 
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
          placeholderTextColor="#333"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#333"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
    backgroundColor: '#5D00CC', 
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

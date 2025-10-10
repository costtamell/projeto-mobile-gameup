import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/685/685655.png' }} // ícone de controle
          style={styles.logo}
        />
        <Text style={styles.title}>GameUp</Text>
      </View>

      {/* Campos */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#6200ee"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#6200ee"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/explore')}
        >
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4B0082' },
  header: {
    backgroundColor: '#FFD700',
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 40, height: 40, marginRight: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#4B0082' },
  form: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
  input: {
    width: 250,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#4B0082',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082',
  },
  footer: {
    height: 40,
    backgroundColor: '#FFD700',
  },
});

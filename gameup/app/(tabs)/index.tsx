import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {

    alert(`Email: ${email}\nSenha: ${senha}`);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Text style={styles.title}>GameUp</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        
      

        <Text style={styles.label}>Senha</Text>
        <TextInput
          
        />

       
      </View>

      <View style={styles.footer} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D00CC', 
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#FFEB00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  form: {
    paddingHorizontal: 20,
  },
  label: {
    color: '#FFEB00',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFEB00',
    height: 40,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFEB00',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#FFEB00',
    height: 40,
  },
});
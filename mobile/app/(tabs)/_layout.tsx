import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Text style={styles.title}>GameUp</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.input}>
          <Text style={styles.placeholderTextLarge}></Text>
        </View>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.input}>
          <Text style={styles.placeholderTextSmall}></Text>
        </View>

        
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
    fontSize: 14, 
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left', 
  },
  input: {
    backgroundColor: '#FFEB00',
    height: 40,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  placeholderTextLarge: {
    color: '#666',
    fontSize: 18,  
    fontWeight: 'bold',
    textAlign: 'left', 
    marginTop: 5, 
  },
  placeholderTextSmall: {
    color: '#666',
    fontSize: 16,  
    fontWeight: 'bold',
    textAlign: 'left', 
    marginTop: 5, 
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

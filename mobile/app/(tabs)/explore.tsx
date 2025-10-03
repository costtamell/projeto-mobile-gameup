import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const jogos = [
  {
    id: 1,
    nome: 'Bubble Shooter',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwqIIKAYLQ5PQgJixk8Jlf3mKrlCPh4ZiMOBiWp7Rhy0btVJH9FchGykEJj6dG4f1T17GzOCV3VvGF9dwDwN9gBIHmbg3RJnFK9-MQ5Q-_g',
  },
  {
    id: 2,
    nome: 'Temple Run 2',
    imagem: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=204,height=204,fit=cover,f=auto/b5c8b617f65be7cc4d56dd3657590ae7/temple-run-2.png',
  },
  {
    id: 3,
    nome: 'Vestir Model - Salão de Moda',
    imagem: 'data:image/jpeg;base64,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',
  },
  // Adicione os outros jogos com as URLs das imagens aqui
];

const Explore = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Explore Jogos</Text>

      <View style={styles.gameContainer}>
        {jogos.map(jogo => (
          <TouchableOpacity key={jogo.id} style={styles.gameItem}>
            <Image source={{ uri: jogo.imagem }} style={styles.gameImage} />
            <Text style={styles.gameText}>{jogo.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#3f51b5',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
  },
  gameContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gameItem: {
    width: 150,
    marginBottom: 20,
    alignItems: 'center',
  },
  gameImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  gameText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Explore;

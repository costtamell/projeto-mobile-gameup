import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Jogos</Text>
      
      <View style={styles.gameContainer}>
        {/* Exemplo de imagens de jogos */}
        <TouchableOpacity style={styles.gameItem}>
          <Image source={require('../assets/game1.png')} style={styles.gameImage} />
          <Text style={styles.gameText}>Bubble Shooter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gameItem}>
          <Image source={require('../assets/game2.png')} style={styles.gameImage} />
          <Text style={styles.gameText}>Temple Run 2</Text>
        </TouchableOpacity>

        {/* Adicione os outros jogos conforme necessário */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f51b5',
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
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
    marginBottom: 10,
  },
  gameText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Explore;
